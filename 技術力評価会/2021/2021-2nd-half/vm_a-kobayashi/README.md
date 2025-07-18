# Googleオフラインコンバージョントラッキングバッチ連携

## 執筆者

小林彩花   
所属：株式会社VOYAGE MARKETING ポイントメディア事業本部   
グレード: E1

## 用語

- [ECナビ](https://ecnavi.jp/)  
  利用者数日本最大級の「毎日貯まるポイントサイト」。  
  アンケートに回答したりネットショッピングをするだけでECナビポイントが貯まる。

- [RP(ResearchPanel)](https://research-panel.jp/)
  - アンケートに回答しポイントを貯めることができるサービス
  - ポイントはECナビポイントになり貯めることができる。
  - ECナビの会員獲得の為のサービス、という立ち位置。

- 7日目アクティブユーザ
  - リサーチパネルに新規会員登録した日を1日目として、登録日から7日目にポイント獲得をしたユーザ

- GCLID
  - 媒体側が各広告クリックに対して発行した固有のID

- [Googleオフラインコンバージョントラッキング](https://support.google.com/google-ads/answer/2998031)
  - GCLIDを引き継いでコンバージョンの情報と紐付けると、「どのクリックに由来してコンバージョンが発生したのか」を広告管理画面でも認識できる、という仕組み

## 概要
Google広告のオフラインコンバージョントラッキングの仕組みを活用し、7日目CVデータをGoogle広告へインポートさせる

## 背景
現状RPでは登録完了をCV地点にしている。その内、約80％が一週間以内に離脱している。  
このオフラインコンバージョンの仕組みを使って、より継続しやすいユーザーを獲得することに活用したい。
ECナビでは7日目にアクティブにポイント獲得しているユーザを、継続してくれるユーザーとして扱っている。
そのため、7日目アクティブユーザのCV情報をGoogle広告へインポートし、機械学習での最適化対象を7日目CVにすることで、より継続しやすいユーザを効率よく獲得することに活用する目的。

## スケジュール

[詳細](https://docs.google.com/spreadsheets/d/1dlzs5yA3eS1wkvmVMyvFmmrz8Vm0iBQpLegydL-k8Ao/edit#gid=1056047634)

- 4月下旬
  - 担当決定&引き継ぎ
- 5月10日
  - ECナビにシステムを作る方針に決定
- 5月11~14日
  - googleクライアントライブラリを利用して見る方法を模索
- 5月17~20日
  - アップロード内容やアップロード処理の全体像を把握。OAuth2クレデンシャル周りの設定等
- 5月24日
  - RESTを利用する方針決定
- 5月27日
  - 実装着手
- 6月14日
  - リリース完全完了

## 仕組み


![image](https://user-images.githubusercontent.com/39899014/139177429-609fef7b-373b-4b6b-892f-0ecb24f154e3.png)
図: カイくん

↑ここまでをVMかいくんが担当

![image](https://user-images.githubusercontent.com/39899014/139177510-b6adafc1-c0d9-4d40-92d2-6c871525b7ea.png)

↑ここの部分を今回自分が担当

#### ナビでのデータの流れ
深夜に前日までの本番データをredshiftに移行している。

<img src="https://user-images.githubusercontent.com/39899014/140883303-8a5da930-bcae-4af6-953f-e504a78abd33.png" width=400px>



## バッチ仕様
- 毎日1回実行予定.
- 自動リカバリできるように2日分のCV情報を送る。
  [指定日]/[バッチ実行日の前日] と、その前日のデータを送る。
  例：指定日 = 2021-06-09、もしくはバッチ実行日が2021-06-10のとき、2021-06-08, 2021-06-09に7日目アクティブに該当するユーザーが対象となる
- バッチの処理の流れ
   1. ecnavi_redshiftから7日目アクティブのユーザーIDとポイント付与日を取得
   2. rp_redshiftから②に紐づくGCLIDを取得
   3. Googleに↓3つをuploadする
      - GCLID(=③で取得したもの),
      - コンバージョン名(=”7日目アクティブ”固定),
      - コンバージョン時間(=ポイント付与日)


## 作業PR
- [googleads-php-libをcomposerで追加](https://github.com/voyagegroup/ecnavi-batch/pull/777)
- [google-ads-phpをcomposerで追加](https://github.com/voyagegroup/ecnavi-batch/pull/780)
  - [Google関係のpackage削除](https://github.com/voyagegroup/ecnavi-batch/pull/799)
- ☆[7日目アクティブのユーザ情報をアップロードするバッチ作成](https://github.com/voyagegroup/ecnavi-batch/pull/770)
- ☆[7日目アクティブのユーザ情報を取得する部分](https://github.com/voyagegroup/ecnavi-batch/pull/784)
- [バッチ設定追加](https://github.com/voyagegroup/krono/pull/883)
- ☆[エラーハンドリング追加修正](https://github.com/voyagegroup/ecnavi-batch/pull/796)
- [過去分を手動でバッチ叩く](https://github.com/voyagegroup/ecnavi-batch/issues/793)

## 考慮したこと

##### バッチをECナビに作るかRPに作るか問題

https://github.com/voyagegroup/research/issues/1250#issuecomment-834118446  
> RPのユーザ獲得 = ECナビのユーザ獲得になる  
アップロードに利用するデータもECナビのデータを使って、ECナビを使ってくれるユーザを目的とする  
今回のRPの立ち位置はあくまで受け口とするイメージ  

- 今回2サービス間のデータを扱うに当たって視野を広くして問題を捉え、対応コストを出して比較し判断  
- 結論RPの獲得 = ナビの獲得となることと、対応コストが低くなりそうなECナビ側にバッチを作ることにした  

※ECナビとRP以外の場所に作る案も出した
lambdaを使ってバッチ実行する方法
バージョンは気にせず使えそうだが、結局redshiftの接続もしないといけず、メリットを上回りコスト高そうだと判断しやめることにした。

##### どのようにしてデータを取ってくるか
https://github.com/voyagegroup/research/issues/1250#issuecomment-834118446  
RPとECナビ、2つのサービスにまたがってデータを取ってくる必要があった。
既存の手法に囚われず適切な方法を探し実装した。

1. RPとナビどちらのデータも入っている`mp`(redshiftスキーマ)を使う 
2. RPのテーブルからGCLIDとユーザID等が取得できるviewを新しく作る
3. `rp`(redshiftスキーマ)の接続情報を追加する
4. `rp`(mysql database)の接続情報を追加する
5. rp-staffに、GCLIDとユーザIDを返すAPIを追加する

結論3で行くことにした。

##### PHPのバージョンの問題で標準ライブラリが利用できなかった
リポジトリは[ecnavi_batch](https://github.com/voyagegroup/ecnavi-batch)に作るように決定した。　  
ecnavi_batchリポジトリのPHPバージョンは7.1  
Googleで用意されているクライアントライブラリのphp7.1のサポートがv3.0で切れた（[link](https://github.com/googleads/google-ads-php/releases/tag/v3.0.0)  
クライアントライブラリv2.2を使おうと思ったが、googleAPIの仕様が変更されv2.2は利用できなくなっていた。([link](https://github.com/voyagegroup/research/issues/1250#issuecomment-845749702)  
そのためクライアントライブラリを利用しない方法で認証等行う必要が出てきた。  
何を使うかのメリット・デメリット・コスト出しをして判断。RESTでいくことにした([link](https://github.com/voyagegroup/research/issues/1250#issuecomment-845827560)  


##### リカバリをなるべくしないで済むようにしたかった
実装後出来るだけ手をかけたくないので、自動リカバリしたかった。  
2日分くらいまとめておくれれば失敗してもバッファが取れる。
2日分: バッチ実行日の前日と前々日に、7日目アクティブ率のポイント付与がされたデータ  
googleに情報を重複して送ってOKかを調べて2日分に調整した。

※googleに情報を重複して送ってOK
GCLIDとコンバージョン日時が同一の場合、同一CVとされ重複して送信しても問題はない。
https://github.com/voyagegroup/research/issues/1250#issuecomment-829759971

※2日分にした理由
アップロードの際、1リクエストに付き2000件までのCVの制限があった。
https://developers.google.com/google-ads/api/reference/rpc/v7/ConversionUploadErrorEnum.ConversionUploadError?hl=ja
※そもそも通常は1日100件~200件程度×2日分なのでそこまで行く想定でもないが、送ったものをログに吐いているのもあり多すぎると調査が大変になると判断し、1000件ずつをMAXとして送ることにした。
また、APIを叩く制限回数は1日あたり 15,000 オペレーションと 1,000 取得リクエストに制限されている。
- 処理またはレポートのためにオブジェクトを取得するために get オペレーションを使用しないことを強く勧めてるらしい。
- 万が一足りなくなった場合(後で 1 日あたり 15,000 回を超える操作が必要になった場合)は、スタンダードアクセスを申請する必要があった。

1日あたりアクセストークンの取得 & uploadで2Request ×30日 = 60Request
しか行わないので、1000で刻んでも大丈夫そうだと判断した。
そのため、通常時より新規登録が膨れてもリクエスト数が増えなさそうな2日分にした。

##### エラーハンドリング
https://github.com/voyagegroup/ecnavi-batch/pull/796
リファレンスを読みエラーの検知をどこまでするか判断していった。
また、下記の通りどの値が、どのようなエラーになったか一目で分かるようした。

何を送ったかをログに吐いている
https://github.com/voyagegroup/ecnavi-batch/blob/8c4aaeabca560f77fd4a2d9b917366303e2191b0/app/Ecnavi/Batch/Job/GoogleOfflineConversionTracking/GoogleAdUploader.php#L223

Uploadする部分でエラーをロギングしてSlackに通知するようにしている（Slackに通知する部分は既存である機能）
https://github.com/voyagegroup/ecnavi-batch/blob/8c4aaeabca560f77fd4a2d9b917366303e2191b0/app/Ecnavi/Batch/Job/GoogleOfflineConversionTracking/GoogleAdUploader.php#L247


##### Google連携のところから着手しスケジュール管理を行った
わからない部分から着手したので、スケジュールが大幅にずれることなく実装できた。
ディレクターさんもスケジュール感を理解して動いてくれていた。

## 実装後
Googleの担当者が変わってしまった影響でまだ広告設定のMTGが設定できていない。  
Google広告周辺をマネジメントしてもらう事になった結果、現状の運用を大きく整理し直しすることになり、その整理が終わってから進めることになったそう。  
Google側との兼ね合いでまだ使えていないが、いつでも使える状況になるくらいデータは溜められている。  
実装後エラーもなく動いているので手がかかっていない。  
仮にエラーが起きた時等リカバリしやすい仕組みになっているので、誰でも即座に対応可能。  
