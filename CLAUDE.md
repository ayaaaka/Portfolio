# ayaaaka-portfolio

Ayaka Kobayashi のポートフォリオサイト。  
プロフィール・職務経歴・スキルを紹介する静的コンテンツサイト。

## 🗂️ プロジェクト構造

```
src/
├── app/                        # ページ (Next.js App Router)
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # / → レジュメページ本体
│   ├── globals.css             # グローバルスタイル・フォント定義
│   ├── resume/page.tsx         # /resume → / へリダイレクト
│   ├── aboutme/page.tsx        # About Me・趣味ページ
│   ├── profile/page.tsx        # /profile → /aboutme へリダイレクト
│   ├── resume/carta/page.tsx   # CARTA社での中から大規模のプロジェクト一覧
│   ├── resume/carta/[id]/page.tsx  # プロジェクト詳細（動的ルート）
│   └── skill/page.tsx          # スキル一覧ページ
├── components/                 # 共有コンポーネント（.js と .tsx 混在）
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PersonalInfo.js         # 個人情報（写真・基本情報）
│   ├── WorkExperience.js       # 職務経歴タイムライン
│   ├── SkillBar.js             # パーセンテージ表示スキルバー
│   ├── LanguageSkill.js        # 5段階ドット評価
│   ├── TitleWithIcon.js        # FontAwesome アイコン付きタイトル
│   └── ui/                     # shadcn/ui コンポーネント
│       ├── card.tsx
│       ├── button.tsx
│       └── HobbyCard.tsx       # ホバーで詳細表示する趣味カード
├── styles/                     # SCSS Modules
│   ├── Navbar.module.scss
│   ├── Footer.module.scss
│   ├── Profile.module.scss
│   └── Resume.module.scss
└── lib/
    └── utils.ts                # cn() ユーティリティ（Tailwind クラス結合）
public/
└── img/
    ├── profile/fire-flower.png # プロフィール背景画像
    └── resume/bear.png         # レジュメ用プロフィール写真
```

## 技術スタック

- **フレームワーク**: Next.js 14.2.5 (App Router)
- **UI**: React 18, TypeScript 5（一部 .js コンポーネントが混在）
- **スタイリング**: Tailwind CSS 3.4 + SCSS Modules（コンポーネントごとに1手法に統一）
- **UIコンポーネント**: shadcn/ui, FontAwesome 6, Lucide React
- **フォント**: Zen Maru Gothic（本文）, Bungee Shade（プロフィールタイトル）
- **パスエイリアス**: `@/*` → `src/*`（tsconfig.json）

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動 (http://localhost:3000)
npm run build  # 本番ビルド
npm run start  # 本番サーバー起動
npm run lint   # ESLint チェック
```

---　　

## 📝 コンテンツ更新ガイド（重要）

**データはすべてコンポーネント内にハードコード。DB・外部API なし。**
更新時は以下のファイルを直接編集する。

| コンテンツ | 更新ファイル |
|-----------|------------|
| 趣味カード（タイトル・説明・リンク） | `src/app/aboutme/page.tsx` |
| 個人情報（名前・生年月日・住所・メール） | `src/components/PersonalInfo.js` |
| パーソナルスキル（スキルバー） | `src/app/page.tsx` |
| 語学スキル（ドット評価） | `src/app/page.tsx` |
| 職務経歴（会社・期間・担当） | `src/app/page.tsx`（WorkExperience への props） |
| スキル一覧（カテゴリ・年数） | `src/app/skill/page.tsx` |
| CARTAプロジェクト一覧 | `src/app/resume/carta/page.tsx` |
| CARTAプロジェクト詳細 | `src/app/resume/carta/[id]/page.tsx` |

---

## 🎨 スタイリングルール

**1コンポーネント1手法を原則とする。** 既存ファイルのパターンを踏襲すること。

| 手法 | 使用コンポーネント | 原則 |
|-----|-----------------|------|
| **Tailwind CSS** | ページ全般・HobbyCard・WorkExperience・LanguageSkill・PersonalInfo | 動的ホバーは `group/group-hover:*`、`hover:*`、`transition` で表現 |
| **SCSS Modules** | Navbar, Footer, TitleWithIcon（Resume.module.scss） | 疑似要素（::before/::after）など Tailwind で困難な表現に使用 |
| **インラインスタイル** | SkillBar のみ（`width: ${percentage}%`） | 動的な数値を要する場合のみ許容 |

- **React state でのスタイル制御は避ける**（`group-hover:` 等の CSS で代替）
- `cn()` ユーティリティ（`src/lib/utils.ts`）は Tailwind クラスを条件付き結合する際に使用
- レスポンシブブレークポイント: `md:` (768px) を主に使用
- shadcn/ui の新規コンポーネントは `src/components/ui/` に配置

## コンポーネントの注意点

- `src/components/` 内は `.js` と `.tsx` が混在。**既存ファイルの拡張子は変えない**
- 新規コンポーネントは `.tsx` で作成
- FontAwesome アイコン: `@fortawesome/react-fontawesome` + `@fortawesome/free-solid-svg-icons`
- Lucide React: shadcn/ui 系コンポーネントで使用

---

## 🚫 Git ルール

### 禁止事項

- ❌ `git checkout -- .` / `git reset --hard` / `git clean -fd`（ユーザー確認なし）
- ❌ 実装完了後の自動コミット/push

**原則**: コミット/push は**ユーザーの明示的許可後のみ**

---

## 🔍 ハルシネーション防止

**原則**: 推測禁止。すべて**実際のコード確認後**に報告。

- ❌ 禁止: 「おそらく〜」「〜のはず」「一般的に〜」
- ✅ 必須: 実際のファイルを確認してから報告（`ファイルパス:行番号` で証拠提示）
- 少しでも迷ったら必ずユーザーに質問

---

## 💬 コミュニケーション

- **応答言語**: 日本語
- **選択式質問**: YES/NO のみ使用
- **オープンな質問**: テキストで列挙
