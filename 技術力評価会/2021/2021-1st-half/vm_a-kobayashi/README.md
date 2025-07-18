# ギフト券(Gods, Digico)をECナビから利用できるようにする

# 執筆者

小林彩花

所属：株式会社VOYAGE MARKETING ポイントメディア事業本部

グレード: E1

# 用語

- [Ecnavi](https://ecnavi.jp/)  
  利用者数日本最大級の「毎日貯まるポイントサイト」。  
  アンケートに回答したりネットショッピングをするだけでECナビポイントが貯まる。

- [Digico](https://user.digi-co.net/entry/new)  
  digicoというデジタルギフト券を扱ったサービスで、digicoからAmazonギフト券やiTunesカード、PeXポイントギフトに交換することができる。  
  ユーザ向けのtoC, パートナー向けのtoB のサービス。


- Gods(giftondemand)  
  ほしい時にほしい分だけギフト券を取得できるオンデマンドサービス。  
  Amazonギフト券やiTunesカード、PeXポイントギフトを発券することができる。  
  パートナー向けのtoB のサービス。  



# 概要
ナビからGods, Digicoを叩いてギフト券を人を介さずにユーザーに渡せるシステムを作る

issue: https://github.com/voyagegroup/ecnavi/issues/11284

# 背景

▽ ギフト券の送付を行っている取り組み
- [友達紹介](https://ecnavi.jp/contents/invite/)
- [ポイント懸賞](https://ecnavi.jp/contents/prize/)

以前の配布フロー

- [友達紹介](https://ecnavi.jp/contents/invite/)
  1. 対象ユーザーを抽出するRedashを川崎さんに作成依頼
  2. 完成したRedashで対象者を抽出
  3. **Godsで必要なamazon券を発行＋DL**
  4. **amazonギフトコードと対象ユーザーIDを並べたものをCSVに貼る（googleドライブ）**
  5. **Cuenoteメール配信管理画面にてメール文・配信リストアップロード**
  6. **メール送信**


- [ポイント懸賞](https://ecnavi.jp/contents/prize/)
  1. 当選者を抽選で決める(spreadsheet)
  2. **該当者に当選お知らせメールの配信**
  3. **Gods, Digicoでギフト券の用意をする**
  4. **メールでギフトコードを送る**


※ 太字の所が今回システム化された部分。

上記のように手作業でギフトコードを取得しているので、セキュリティ的にも運用的にも適切とは言えなかった。  
  - 誤操作で不要なギフト券を発券してしまう可能性
  - 悪意を持った運用者がギフトコードを利用する可能性

ギフト券の発行からユーザへそれを付与する部分をシステム化することで、安全かつ効率的に運用していけるようにしたい。

# 全体のフロー
　https://cacoo.com/diagrams/UF3i7gy8AksBKoOj/A7488?reload_rt=1618543452161_0&

# テーブル設計

- GIFT_GRANT_HISTORY　: ギフト付与履歴
- GIFT_TYPE　　　　　　　: ギフト金種
- GIFT_CATEGORY　　　　: ギフト券種

<img src="https://user-images.githubusercontent.com/39899014/114967907-4260b980-9eb0-11eb-8a7c-82588a8e0917.png" width="700px">

### ユーザに付与する箇所 (スタッフ操作)

- PR
  - https://github.com/voyagegroup/ecnavi/pull/11312

やること
- 対象ユーザのギフト獲得履歴に反映される
  - 対象ユーザ全員の分の登録が成功したらcommit
- 対象ユーザに対してギフトを獲得した旨のメールが送られる
  - ↑が終わったらSESに入れて順次メール送信する

### ギフト券を発券する (ユーザー操作)

- PR
  - https://github.com/voyagegroup/ecnavi/pull/11232
    - リファクタ
      - https://github.com/voyagegroup/ecnavi/pull/11910

やること

- ギフト券の発券・照会
  - ⚠注意点⚠  
    外部APIを叩いて状態によって処理を変える必要がある    
  
ECナビ内だけでなく外部(Gods, Digico)のシステム側にもデータを作る    
= ECナビ内のデータと外部のデータに差異が出る状況がある。

- 前処理：外部APIを投げる前
  - [発券時tradeIdを発行し、レスポンスがどんな場合でも必ずDBに保存する。](https://github.com/voyagegroup/ecnavi/blob/master/sites/ecnavi/src/Ecnavi/Ecnavi/Mypage/GiftHistory/GiftService.php#L61-#L64)
- 本処理：外部APIをコールする部分
  - [ギフト券の状態によって叩くAPIを変更する。](https://github.com/voyagegroup/ecnavi/blob/master/sites/ecnavi/src/Ecnavi/Ecnavi/Mypage/GiftHistory/GiftService.php#L71-#L75)
  - [エラーの種類によってギフト券の状態を変更する。](https://github.com/voyagegroup/ecnavi/blob/master/sites/ecnavi/src/Ecnavi/Ecnavi/Mypage/GiftHistory/GiftService.php#L82-#L102)
- 後処理：外部APIの結果を受け取って処理する部分
  - [例外を出し検知できるようにする。](https://github.com/voyagegroup/ecnavi/blob/master/sites/ecnavi/src/Ecnavi/Ecnavi/Mypage/GiftHistory/GiftService.php#L97-#L102)

#### 実際の処理

- Controller
  - https://github.com/voyagegroup/ecnavi/blob/master/sites/ecnavi/apps/controller/mypage/history/gift/ShowController.php#L45

- ギフト券の発券 & テーブルへの保存
  - https://github.com/voyagegroup/ecnavi/blob/master/sites/ecnavi/src/Ecnavi/Ecnavi/Mypage/GiftHistory/GiftService.php#L49

## 現在

- 想定外の例外時検知可能
  - https://app.datadoghq.com/monitors/30496435
  - <img src="https://user-images.githubusercontent.com/39899014/114970369-44794700-9eb5-11eb-9e3f-cd8ad9f8e26f.png" width=500px>

- 発券履歴はredashから確認可能
  - https://redash.voyagegr.net/queries/5814

## 今後
- 新しいギフト提携先と連携したくなったときの追加コストは低い
- 他コンテンツでギフトを配りたくなった場合でも対象者リストがあれば簡単にギフト券付与が出来る


