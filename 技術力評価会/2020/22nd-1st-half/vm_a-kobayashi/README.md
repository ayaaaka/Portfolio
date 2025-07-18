# BacklogのイベントをSlack通知させる

## 執筆者

小林彩花

所属：株式会社VOYAGE MARKETING ポイントメディア事業本部

グレード: E1

## 概要

ECナビではCSの対応用にbacklogを利用しているが、課題の追加や更新・とりこぼしなどに気付きづらかった。
そのため、backlogで課題を作成・更新した際に、課題の内容に応じて指定の内容がslackの通知で流れるように新規開発を行った。

## 評価してほしいポイント

- 問題点を解決することができた。
- <details><summary>ヒアリングは複数人に対して数回行い仕様を固められた。</summary>
  
  タスクの進め方のストーリー（[すり合わせ資料](https://docs.google.com/document/d/1dkndZsZ5rtLS08lEFBYIiXzC78a88CeZDf-pVkjB6x4/edit)）
  - 今回の話はメディアチームからの依頼で始まり
  - まず最初に、起票した人に話を伺ったが、何点か違和感を感じる点があった。
  - 更に以前では振分担当が存在して課題を各担当者に振り分けていたそうだったので、その方に話を伺った。
  - 2人に背景を詳しく伺った所、解釈が違う点がいくつかあったので、どれが一番やりやすい形になるかに論点を起き現状を整理し、仕様を固めていった。
  </details>
  
- lambdaやGoは初めてだったけれど仕様を確認しつつ最後まで実装しきれた。

- <details><summary>システムを独立させ改修がしやすい仕組みの設計ができた。</summary>
  
  - 具体的に
    - それぞれ１バッチ、１ラムダ関数のスコープでしか影響がないことが明白なので削除・改修の際に他部分を考慮する必要がない
  - コードレベルの一例でいうと
    - 通知したいSlackチャンネルを変えたい場合
      - 環境変数で管理・呼び出しして利用しているので、そこの値を変えればlambdaとbatchのどちらにも手を入れる必要がない
    - 通知内容に出したい項目が変わったとき
      - 構造体を列挙しているので引っ張ってくる値を変えればいいだけで済む（[link](https://github.com/voyagegroup/ecnavi-aws-cloudformation/pull/2009/files#r361395473)） (backlogはリファレンスにどういう値が取得できるかの詳細がない為、情報の一つとして利用できる形.)
    - プロジェクトの増減やメンショングループの変更があったとき
        - 表に対応させて場合分けしたので比較・修正しやすい(lambda: [link](https://github.com/voyagegroup/ecnavi-aws-cloudformation/blob/257cd679cb0907f7090e4bb3dbd349ca72ac2d9c/lambda_functions/notify_backlog_event/handler.go#L93-#L99), batch: [link](https://github.com/voyagegroup/ecnavi-batch/blob/e26189cd1a4f33c7d5f3a641938da0c6ca17418b/app/Ecnavi/Batch/Job/NotifyBacklogEventToSlack/SlackSender.php#L51-L71))
</summary>


## 背景

ECナビではCSをイー・ガーディアン株式会社（以下EG）に外注しており、ECナビとのやり取りをbacklogで行っている。

<kbd>![image](https://user-images.githubusercontent.com/39899014/82319585-c98d7f00-9a0c-11ea-94cf-aabc3ce53a16.png)</kbd>

backlogの画面例
<kbd>![image](https://user-images.githubusercontent.com/39899014/82432588-3c5d2f80-9acb-11ea-9c2c-fa61591af763.png)</kbd>

ECナビのbacklogスペースの中に複数プロジェクトが存在する  
<kbd><img src="https://user-images.githubusercontent.com/39899014/82432734-72021880-9acb-11ea-8c07-f58120684645.png" width=200px></kbd>


#### 用語の整理
- イベント発火の通知： 課題のイベント（作成や更新、コメント等）の発火で送られる通知　　
- リマインド通知： 課題が完了にならないまま、作成からn日経った場合の通知　

#### 当時の運用方法

1. EGさんが担当者を指定してbacklogに起票する（通知はどこにも来ない）
2. 各課題担当者は担当になった課題があるかを確認しにいき、あれば対応を行いEGさんに戻す
3. 課題担当のリーダーがたまに確認を行い、各課題担当者の進捗がなかった場合等は各課題担当者へ再度連絡も行っていた

- 課題の起票ペースは、日によって起票数が違うが、１日に数回〜数日に１回と幅があった。

#### その際の制約

backlogのデフォルトの通知機能は利用できない。リマインド機能も存在しない。
　　
- 課題にはお問い合わせ内容が記載されるため、ユーザーの個人情報などの機微情報が載ることが多い。
- backlogにはデフォルトでメール通知機能があるが、メール内容には課題の全文が載ってしまった。
- 中には外出先で見れるようにと、個人携帯でのメール連携を行っている人もいる為、個人情報は開いてすぐ見れる状態で出したくない。
- Slack連携もデフォルトで用意されているが、メール同様課題の全文が載ってしまったので、privateチャンネルにするとしても対応として適切でないと判断。

- backlogに課題内容の詳細は表示せず通知できるか, リマインド機能は存在するかを問い合わせてみた結果、「現状そのような機能はない」とのことだった。

#### 問題点

- 対応状況や更新の通知が来なかったため、都度アクセスして確認するしか方法がない

- 課題の更新が定期的・頻繁でない
  - → わざわざ見に行っても更新がない 
    - → 見る頻度が落ちる
      - → 実際に問い合わせが来たときの対応速度が遅くなる

- それぞれの担当課題のみの確認に留まってしまいやすく、担当者以外が気付きづらい仕組みとなっていた。  
  - 課題の確認漏れが増えてしまっていた　　

## 目的

課題のイベント（作成・更新・コメント）が発火したタイミングで、課題の内容に応じて指定の内容がSlack通知で流れ、関係者が気付きやすい仕組みにする。
更に、リマインド機能を用意し取りこぼしを防ぐ。

## 解決手法

backlogで課題のイベント(作成・更新・コメント)が発生した際の通知と、リマインド通知をSlackに送る機能を実装する。  

通知は、プロジェクトやカテゴリに応じてSlackグループに対しメンションを飛ばす。  
https://docs.google.com/spreadsheets/d/14VvDe99TQE9xGuEI32Y7oawqewJQGDxOBxQ1-bBCgog/edit#gid=904093971  
通知内容は、件名と担当者、課題に飛べるリンクを表示させることで、一見で誰担当のどんな課題かをわかりやすくし、詳細確認は該当の課題
をすぐに開けるようにした。  


### ①イベントの発火ごとに通知する

backlogのwebhookを利用し、通知したい課題のイベント時に通知させ、lambdaからSlack通知をさせる。

[実装したPRはこちら](https://github.com/voyagegroup/ecnavi-aws-cloudformation/pull/2009/)

<kbd><img src="https://user-images.githubusercontent.com/39899014/82420108-3c086880-9aba-11ea-91ee-4903a8c11553.png"></kbd>


- lambdaを使った理由
  - いつbacklogのイベント発火があるかわからない中、サーバーレスなので叩かれたときだけ実行される（今回頻度もそこまで多くない）
  - 独立しているので改修・削除が簡単
  - 既にlambdaを利用していたので取り組みやすい
  - webサーバでも実装可能であるが、backlogとslackだけなのでナビ本体になんの関連もないため、lambdaで充分だった

- lambdaのログはCloudWatchLogsで確認が可能
  - datadogでCloudWatchLogsをモニターして、エラーが発生したらslackに通知を送る仕組み


### ②取りこぼし防止策でリマインド通知を行う

毎平日10:00AMにリマインド通知をする

1. backlogAPIを叩き各プロジェクトの課題一覧を取得
2. 課題更新日から、優先度に合わせた一定の期間が経過していたらSlack通知させる

- 優先度
  - 高 : 3日
  - 中 : 1週間
  - 低 : 通知なし
  
[実装したPRはこちら](https://github.com/voyagegroup/ecnavi-batch/pull/536)  

<kbd><image src='https://user-images.githubusercontent.com/39899014/82427831-95759500-9ac4-11ea-909b-3430ddc0ce21.png'></kbd>
 ※krono = ECナビ内にあるシステム名. cron機能をもつ

- ナビ内の既存システムに載っかり、jobに失敗したらissueが自動的に起票され、slack通知させる
- 各プロジェクトの一覧を取得する際は、件数が多くなる可能性があるためジェネレータを使用し、１００件ずつのリクエストを行った
- 例外発生時API_KEYが乗らないように気をつけた（[link](https://github.com/voyagegroup/ecnavi-batch/blob/e26189cd1a4f33c7d5f3a641938da0c6ca17418b/app/Ecnavi/Batch/Job/NotifyBacklogEventToSlack/FetchBacklog.php#L107)）

 ### 実際にエラーが起きたとき
 
下記はリマインド通知を行う処理中で、渡ってくる値がnullだったため参照エラーになった。
https://github.com/voyagegroup/ecnavi-job-recorder/issues/1636

即座に原因特定をしリカバリ・修正ができた。

## 結果

下記のように、担当者以外も気付きやすい仕組みになっているので、課題のパスや進捗確認などがしやすくなったと思える。  
現在は対応漏れはほぼ0となっており、EGさんからの進捗伺いが来ない状況を保てている。
課題の更新等があれば通知が来るので、来ているかわからない課題を都度確認する手間も省けた。  
独立しているので改修しやすく、今後も要望が出れば改善を重ねていける。

<kbd><img src="https://user-images.githubusercontent.com/39899014/82423234-7e33a900-9abe-11ea-8918-a0ee18bc445b.png" width=300px;></kbd><kbd><img src="https://user-images.githubusercontent.com/39899014/82423249-7ffd6c80-9abe-11ea-927c-f6ebd9281bee.png" width=300px;></kbd>

