# ayaaaka-portfolio

Ayaka Kobayashi のポートフォリオサイト。  
プロフィール・職務経歴・スキルを紹介する静的コンテンツサイト。

## ディレクトリ構造

```
ayaaaka-portfolio/
├── public/
│   └── img/
│       ├── profile/fire-flower.png   ← プロフィール背景画像
│       └── resume/bear.png           ← レジュメ用写真
├── src/
│   ├── app/                          ← ページ (Next.js App Router)
│   │   ├── layout.tsx                ← ルートレイアウト
│   │   ├── globals.css               ← グローバルスタイル・フォント
│   │   ├── profile/page.tsx          ← プロフィール・趣味ページ
│   │   ├── resume/page.tsx           ← 職務経歴ページ
│   │   ├── resume/carta/page.tsx     ← CARTAプロジェクト一覧
│   │   ├── resume/carta/[id]/page.tsx← プロジェクト詳細（動的ルート）
│   │   └── skill/page.tsx            ← スキル一覧ページ
│   ├── components/                   ← 共有コンポーネント
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PersonalInfo.js
│   │   ├── WorkExperience.js
│   │   ├── SkillBar.js
│   │   ├── LanguageSkill.js
│   │   ├── TitleWithIcon.js
│   │   └── ui/                       ← shadcn/ui コンポーネント
│   ├── styles/                       ← SCSS Modules
│   └── lib/utils.ts                  ← cn() ユーティリティ
├── CLAUDE.md                         ← AIコーディング指示書
└── package.json
```

## ページ構成

| ページ | URL | ファイル | 説明 |
|-------|-----|---------|------|
| プロフィール | `/profile` | `src/app/profile/page.tsx` | 自己紹介・趣味カード |
| 職務経歴 | `/resume` | `src/app/resume/page.tsx` | 2カラムのレジュメ |
| スキル | `/skill` | `src/app/skill/page.tsx` | スキルカテゴリ一覧 |
| CARTAプロジェクト一覧 | `/resume/carta` | `src/app/resume/carta/page.tsx` | 担当プロジェクト一覧 |
| プロジェクト詳細 | `/resume/carta/[id]` | `src/app/resume/carta/[id]/page.tsx` | プロジェクト詳細 |

## 技術スタック

| カテゴリ | 技術 | 用途 |
|---------|------|------|
| フレームワーク | Next.js 14.2.5 (App Router) | ページルーティング・SSR |
| UI | React 18, TypeScript 5 | コンポーネント構築 |
| スタイリング | Tailwind CSS 3.4 | レイアウト・ユーティリティ |
| スタイリング | SCSS Modules (Sass) | 既存コンポーネントのスタイル |
| UIコンポーネント | shadcn/ui, Radix UI | Card, Button 等 |
| アイコン | FontAwesome 6, Lucide React | アイコン表示 |
| フォント | Zen Maru Gothic, Bungee Shade | Google Fonts |

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動 (http://localhost:3000)
npm run build  # 本番ビルド
npm run start  # 本番サーバー起動
npm run lint   # ESLint チェック
```

## コンテンツ更新

**データはすべてコンポーネント内にハードコード。DB・外部API なし。**   
更新時は以下のファイルを直接編集する。

| コンテンツ | 更新ファイル |
|-----------|------------|
| 趣味カード | `src/app/profile/page.tsx` |
| 個人情報（名前・連絡先） | `src/components/PersonalInfo.js` |
| パーソナルスキル・語学スキル | `src/app/resume/page.tsx` |
| 職務経歴 | `src/app/resume/page.tsx` |
| スキル一覧 | `src/app/skill/page.tsx` |
| CARTAプロジェクト | `src/app/resume/carta/page.tsx`, `src/app/resume/carta/[id]/page.tsx` |

## デプロイ

[Vercel](https://vercel.com/) を推奨（Next.js 公式ホスティング）。

## 関連ドキュメント

- [CLAUDE.md](CLAUDE.md) - AIコーディング指示書（開発ガイドライン）
