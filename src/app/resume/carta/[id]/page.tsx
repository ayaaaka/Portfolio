import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface ProjectDetail {
  id: number;
  title: string;
  period: string;
  category: string;
  description: string;
  skills: string[];
  teamSize: string;
  role: string;
  background: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  learnings: string[];
  technicalDetails?: {
    architecture?: string;
    database?: string;
    apis?: string[];
    challenges?: string[];
  };
}

const ProjectDetailPage = ({ params }: { params: { id: string } }) => {
  const projects: { [key: number]: ProjectDetail } = {
    1: {
      id: 1,
      title: "メディアとの連携掲載",
      period: "2019年7月 - 2019年9月",
      category: "API連携・システム設計",
      description: "ゴシップガールズトークとECナビのAPI連携を実装し、リアルタイムポイント付与システムを構築。バッチ通知での掲載によりCV数を約30倍に向上させ、売上も約30倍に増加。",
      skills: ["PHP", "MySQL", "Linux/UNIX", "AWS", "Redshift", "API Gateway", "Cloudwatch", "Datadog"],
      teamSize: "1名",
      role: "設計・開発・連携調整",
      background: "ECナビとゴシップガールズトーク（女子専用トークルームサービス）は既に提携していたが、従来ASPを利用したファイル連携式でポイント付与を行っていた。ASP経由だと、ユーザーがコメントしてからポイント付与まで数日かかってしまう問題があった。また、広告面での掲載では検索しないと案件が出てこないため、ユーザーにとって分かりづらかった。",
      challenges: [
        "ASPを使わないリアルタイムポイント付与システムの構築",
        "データの量・保存期間を考慮したDB設計（毎月100万〜300万件の想定）",
        "ASP経由とAPIでのポイント付与が重複しないリリーススケジュールの調整",
        "外部API連携におけるエラーハンドリングと監視システムの構築",
        "パーティショニングとRedshift移行による大容量データ管理"
      ],
      solutions: [
        "API連携によるリアルタイムポイント付与システムの実装",
        "毎月パーティションを切るMySQLテーブル設計と3ヶ月での定期削除",
        "Redshiftへの定期的なデータ移行処理の構築",
        "バッチ通知での掲載により、リアルタイム付与案件として表示",
        "Datadogによるエラー検知とSlack通知システムの実装"
      ],
      results: [
        "CV数が約30倍に向上",
        "売上が約30倍に増加",
        "リアルタイムポイント付与により、ユーザー体験が大幅改善",
        "ブログ等で取り上げられ、毎日できる美味しい案件として認知向上"
      ],
      learnings: [
        "大容量データを考慮したDB設計とパーティショニング手法",
        "外部API連携におけるエラーハンドリングと監視の重要性",
        "リリーススケジュールの調整による安全な移行手法",
        "Redshiftへのデータ移行処理の実装",
        "タスクアラート機能の活用によるユーザビリティ向上"
      ],
      technicalDetails: {
        architecture: "API連携によるリアルタイムポイント付与システム。MySQLでのパーティショニング設計とRedshiftへの定期的なデータ移行処理を組み合わせた大容量データ管理システム。",
        database: "毎月パーティションを切るMySQLテーブル設計。3ヶ月での定期削除とRedshiftへの定期的なデータ移行。毎月100万〜300万件のデータを効率的に管理。",
        apis: ["ゴシップガールズトーク API", "ECナビ API", "Redshift API", "CloudWatch API"],
        challenges: ["大容量データの効率的な管理", "外部API連携の実装", "パーティショニング設計", "データ移行処理の構築"]
      }
    },
    2: {
      id: 2,
      title: "Backlogの通知をSlack連携させる",
      period: "2019年12月 - 2020年1月",
      category: "AWS・連携",
      description: "ECナビのCS対応用Backlogで課題の追加や更新・とりこぼしに気付きづらい問題を解決するため、BacklogのイベントをSlack通知させるシステムを新規開発。Lambdaとバッチ処理を組み合わせた独立したシステムを構築。",
      skills: ["Go", "MySQL", "Linux/UNIX", "Lambda", "API Gateway", "Cloudwatch", "PHP", "AWS", "Slack API"],
      teamSize: "2名",
      role: "設計・開発",
      background: "ECナビではCSを外注しており、やり取りをBacklogで行っている。従来の運用では、業務委託先担当者が社内担当者を指定してBacklogに起票しても通知はどこにも来ず、各課題担当者は担当になった課題があるかを確認しに行く必要があった。課題の起票ペースは日によって数回〜数日に1回と幅があり、対応状況や更新の通知が来なかったため、都度アクセスして確認するしか方法がなかった。",
      challenges: [
        "Backlogのデフォルト通知機能が利用できない（機微情報が含まれるため）",
        "課題の更新が定期的・頻繁でないため、確認頻度が落ちて対応速度が遅くなる",
        "担当者以外が気付きづらい仕組みで課題の確認漏れが増加",
        "LambdaやGoは初めての技術スタック",
        "複数プロジェクトに応じた適切なSlack通知の設計"
      ],
      solutions: [
        "Webhookを利用したLambda関数によるイベント通知システムの構築",
        "プロジェクトやカテゴリに応じたSlackグループへのメンション機能",
        "平日10:00AMのリマインド通知バッチ処理の実装",
        "優先度に応じた通知期間の設定（高：3日、中：1週間、低：通知なし）",
        "独立したシステム設計による改修しやすさの確保"
      ],
      results: [
        "課題の対応漏れがほぼ0になり、業務委託先担当者からの進捗伺いが来ない状況を実現",
        "課題の更新があれば通知が来るため、都度確認する手間を削減",
        "担当者以外も気付きやすい仕組みにより、課題のパスや進捗確認が容易に",
        "独立したシステムにより、今後も要望に応じた改善が可能",
        "CloudWatchLogsとDatadogによる監視システムでエラー検知を実現"
      ],
      learnings: [
        "Lambda関数の設計・実装手法",
        "Go言語での開発経験",
        "Webhookを活用した外部サービス連携",
        "バッチ処理とイベント駆動処理の組み合わせ",
        "独立したシステム設計の重要性",
        "機微情報を考慮した通知システムの設計"
      ],
      technicalDetails: {
        architecture: "Webhookを利用したLambda関数によるイベント通知システムと、バッチ処理によるリマインド通知システムの組み合わせ。独立したシステム設計により、改修・削除が容易な構造。",
        database: "Backlog APIからのデータ取得とSlack通知の連携。ジェネレータを使用した100件ずつのリクエスト処理。例外発生時のAPI_KEY保護機能。",
        apis: ["Backlog Webhook API", "Slack API", "Backlog API", "CloudWatch API"],
        challenges: ["Lambda関数の設計", "バッチ処理の最適化", "外部API連携の実装", "監視システムの構築"]
      }
    },
    3: {
      id: 3,
      title: "新規アフィリエイトシステムの設計〜構築",
      period: "2020年2月 - 2020年6月",
      category: "システム構築",
      description: "ECナビの定額アフィリエイトにおける不正CVポイント付与対策システムを設計・構築。トラッキングキー発行&DB保存方式による不正対策を実装し、現在多数のASPで運用中。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "Redshift", "ETL"],
      teamSize: "1名",
      role: "設計・開発・効果測定・保守",
      background: "ECナビでは当時時点で、ECナビのASP繋ぎこみでは、ASP側にはユーザーIDしか渡っていないため、案件のすり替え等による成果の不正が行われる可能性があった。そのため多角的なアプローチを行い不正を阻止する方針で、ナビとASP間での不正対策案として考案した。",
      challenges: [
        "過去の不正事例（広告ID書き換えによる高額案件でのポイント付与）への対策",
        "ASP側のパラメータ長制限（最小32文字）への対応",
        "月830万件の大量データ処理とDB容量管理",
        "2年間のデータ保持による約120GBのDBサイズ予想",
        "暗号化方式とトラッキングキー方式の比較検討"
      ],
      solutions: [
        "ランダムな文字列（トラッキングキー）発行&DB保存方式を採用",
        "約2億件のテストデータによる性能検証を実施",
        "トラッキングキーの生成方式を最適化（base64エンコード、URLセーフ変換）",
        "パーティション毎の定期削除設定によるDB容量管理",
        "Redshiftへのバックアップデータ移行設定"
      ],
      results: [
        "不正CVポイント付与を完全に防止するシステムを構築",
        "2つのASPで実際に運用開始し、トラッキングキーによる不都合・不具合等なく運用",
        "成果通知時の問い合わせ対応コストを削減",
        "新規ASPとの繋ぎこみは必ずこの方式で提携することを決定",
        "現状21万件強のデータで安定運用中"
      ],
      learnings: [
        "不正対策システムの設計手法",
        "大量データ処理の性能検証方法",
        "暗号化とトラッキングキーの比較検討プロセス",
        "DB容量管理とパーティション設計",
        "ASP連携におけるセキュリティ設計",
        "段階的な検証と実装の進め方"
      ],
      technicalDetails: {
        architecture: "トラッキングキー発行&DB保存方式による不正対策システム。1成果に対して1つのユニークなランダム文字列を生成し、URLに付与してASPに遷移。生成したトラッキングキーはDBに保存し、成果通知時に照合する仕組み。",
        database: "トラッキングデータ保存用DB、backup用Redshift、パーティション毎の定期削除設定。約2億件のテストデータで性能検証を実施し、1件のselectが0.08秒以内を実現。",
        apis: ["トラッキングキー生成API", "成果通知照合API", "管理画面修正", "ETLデータ移行"],
        challenges: ["大量データ処理の性能最適化", "DB容量管理", "不正対策の実装", "ASP連携のセキュリティ確保"]
      }
    },
    4: {
      id: 4,
      title: "ギフト券発券APIを叩き、サービス内でギフト発券を可能に",
      period: "2020年11月 - 2021年2月",
      category: "API連携",
      description: "ギフトオンデマンドのAPIを活用してギフト券を人を介さずにユーザーに渡せるシステムを構築。友達紹介やポイント懸賞での手作業によるギフト券配布を自動化した。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "外部API連携", "SES"],
      teamSize: "3名",
      role: "設計・開発・運用",
      background: "従来、友達紹介やポイント懸賞でのギフト券配布は手作業で行われており、Amazon券を発行→ダウンロード→CSVに貼り付け→メール配信という流れだった。この手作業はセキュリティ的にも運用的にも適切ではなく、誤操作で不要なギフト券を発券してしまう可能性や、悪意を持った運用者がギフトコードを利用する可能性があった。",
      challenges: [
        "ギフトオンデマンドのAPIとの連携による複雑な処理フロー",
        "ECナビ内のデータと外部システムのデータに差異が出る可能性",
        "外部APIの状態によって処理を変える必要がある",
        "想定外の例外時の検知と対応",
        "セキュリティを考慮したギフト券発券システムの設計"
      ],
      solutions: [
        "前処理・本処理・後処理に分けた段階的なAPI連携設計",
        "tradeIdを発行し、レスポンスがどんな場合でも必ずDBに保存する仕組み",
        "ギフト券の状態によって叩くAPIを変更する動的処理",
        "エラーの種類によってギフト券の状態を変更する例外処理",
        "Datadogによる監視システムの構築"
      ],
      results: [
        "ギフト券の発行からユーザへの付与まで完全自動化",
        "手作業によるセキュリティリスクを解消",
        "運用効率の大幅な向上",
        "想定外の例外時も検知可能な監視システムを構築",
        "発券履歴をRedashで確認可能な状態を実現",
        "新しいギフト提携先との連携コストを低減"
      ],
      learnings: [
        "外部API連携の設計パターン",
        "段階的な処理設計の重要性",
        "例外処理と監視システムの構築",
        "セキュリティを考慮したシステム設計",
        "データ整合性の管理手法",
        "運用効率化のための自動化設計"
      ],
      technicalDetails: {
        architecture: "前処理・本処理・後処理に分けた段階的なAPI連携設計。外部APIの状態によって処理を動的に変更する仕組み。",
        database: "ギフト付与履歴、ギフト金種、ギフト券種の3つのテーブルを設計。tradeIdによる追跡可能な発券システム。",
        apis: ["ギフトオンデマンド API", "SES（メール配信）", "ギフト券発券・照会API"],
        challenges: ["外部API連携の複雑な処理フロー", "データ整合性の管理", "例外処理の設計", "監視システムの構築"]
      }
    },
    5: {
      id: 5,
      title: "自社のアプリへの機能追加",
      period: "2022年7月 - 2022年9月",
      category: "モバイル開発",
      description: "Apple審査で指摘されたアカウント削除機能とSign in with Appleでの氏名入力補完機能を実装し、無事アプリリリースに漕ぎ着けた。",
      skills: ["Swift", "AppTrackingTransparency", "AuthenticationServices", "Sign in with Apple JS", "Firebase", "iOS開発"],
      teamSize: "2名",
      role: "設計・開発・Apple交渉",
      background: "定期的に行っているアプリのパッケージアップデートを行う際に、Appleの審査で落ちてしまった。新規で開発を行っていないアプリで審査が落ちた為、チームが解散し知見がある人がいない&開発全く何もわからないという状況で、審査で指摘されていることについて調査・対応をする運びとなった。",
      challenges: [
        "アプリ開発の知見が全くない状態からのスタート",
        "チームが解散しており、知見がある人がいない状況",
        "Apple審査の厳格なガイドラインへの対応",
        "Swift、iOS開発のキャッチアップ",
        "複数サービス（ECナビ、リサーチパネル）を跨いだシステム理解"
      ],
      solutions: [
        "公式ドキュメントを中心とした学習アプローチ",
        "経験者への積極的な相談",
        "Appleとの交渉による対応範囲の最小化",
        "アカウント削除機能のアプリ内実装",
        "Sign in with Appleでの氏名入力補完機能の実装"
      ],
      results: [
        "Apple審査を無事パスし、iOSアプリのリリースが可能になった",
        "アカウント削除機能をアプリ内に実装",
        "Sign in with Appleでの氏名入力補完機能を実装",
        "プライバシーポリシーの交渉により開発対応を回避",
        "認証周りの知識継承を実現"
      ],
      learnings: [
        "iOS開発、Swiftの基礎知識",
        "Apple審査プロセスとガイドライン対応",
        "Firebase認証の仕組み",
        "複数サービスを跨いだシステム設計",
        "公式ドキュメント中心の学習手法",
        "経験者への相談の重要性"
      ],
      technicalDetails: {
        architecture: "ECナビ、リサーチパネル、iOSアプリを跨いだ認証システムの理解と実装。Firebaseを活用したApple認証の実装。",
        database: "仮会員テーブルへの氏名保存機能の実装。ECナビとリサーチパネルの連携データベース設計。",
        apis: ["アカウント削除機能", "Sign in with Apple認証", "氏名入力補完機能", "Firebase認証連携"],
        challenges: ["アプリ内退会フローの実装", "Apple認証での氏名取得", "複数サービス間のデータ連携", "審査対応の交渉"]
      }
    },
    6: {
      id: 6,
      title: "新しいユーザ訪問訴求コンテンツの作成",
      period: "2022年12月 - 2023年2月",
      category: "企画・開発",
      description: "コンテンツの企画から携わり、設計から開発まですべてを担当。ユーザの訪問訴求コンテンツを何かしら作りたいという要望から、要件を決めていきリリースまで持っていった。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "2名",
      role: "企画・設計・開発",
      background: "ユーザの訪問訴求を高めるための新しいコンテンツが必要という要望があり、企画段階から関わって要件定義からリリースまでを担当した。",
      challenges: [
        "企画段階からの要件が曖昧",
        "ユーザの興味を引くコンテンツの設計",
        "短期間での開発スケジュール",
        "チームマネジメント"
      ],
      solutions: [
        "コンテンツの企画から携わり、要件を明確化",
        "ユーザビリティを重視した設計",
        "効率的な開発プロセス",
        "チーム全体での協力体制構築"
      ],
      results: [
        "新しいユーザ訪問訴求コンテンツをリリース",
        "ユーザエンゲージメントの向上",
        "企画力の向上",
        "チームマネジメントスキルの習得"
      ],
      learnings: [
        "企画力",
        "着手スコープの狭め方",
        "チームマネジメント",
        "ユーザ中心の設計手法"
      ]
    },
    7: {
      id: 7,
      title: "EUC-JPのデータベースをUTF-8に移行",
      period: "2023年4月 - 2023年7月",
      category: "インフラ・移行",
      description: "どのように移行するかの選定や移行スクリプトなどの準備、実際の移行計画の用意・周知やリハーサル・本番を通して3名のチームで実施。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "ECS", "StepFunction"],
      teamSize: "3名",
      role: "計画・設計・実装",
      background: "データベースがEUC-JPエンコーディングで運用されており、文字化けの問題や国際化対応の必要性からUTF-8への移行が必要となった。",
      challenges: [
        "大量のデータを安全に移行する必要がある",
        "サービス停止を最小限に抑える必要がある",
        "移行後のデータ整合性を保つ必要がある",
        "文字コード変換によるデータ破損のリスク"
      ],
      solutions: [
        "移行方法の選定と移行スクリプトの準備",
        "移行計画の用意・周知",
        "リハーサル・本番移行の実施",
        "ECS、StepFunctionを活用した自動化"
      ],
      results: [
        "データベースの文字コードをEUC-JPからUTF-8に正常に移行",
        "サービス停止を最小限に抑制",
        "データ整合性を保持",
        "国際化対応の基盤を構築"
      ],
      learnings: [
        "ECS、StepFunctionの知識",
        "文字コードの知識",
        "大規模データ移行の手法",
        "チームでの移行作業の進め方"
      ]
    },
    8: {
      id: 8,
      title: "広告出稿における外部連携先との繋ぎ込み作業を管理画面化",
      period: "2024年2月 - 2024年5月",
      category: "システム改善",
      description: "外部連携との繋ぎ込みシステムの現状調査とビジネスサイドと協業して管理画面の設計。今まで連携の度にエンジニアコストがかかっていたのを0にし、ビジネスサイドのみで完結できるようにした。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "2名",
      role: "計画・設計・実装",
      background: "広告出稿における外部連携先との繋ぎ込み作業は、従来エンジニアが都度対応していたため、エンジニアコストが高く、ビジネスサイドの迅速な対応が困難だった。また、連携先ごとに異なる設定方法があり、統一された管理方法がなかった。",
      challenges: [
        "エンジニアコストの削減",
        "ビジネスサイドのみでの連携作業完結",
        "統一された管理画面の設計",
        "既存システムとの整合性確保",
        "運用負荷の軽減"
      ],
      solutions: [
        "管理画面による連携設定の自動化",
        "ビジネスサイド向けの直感的なUI設計",
        "既存システムとの連携部分の特定と改善",
        "運用フローの最適化",
        "ドキュメント整備とナレッジ共有"
      ],
      results: [
        "エンジニアコストを0に削減",
        "ビジネスサイドのみで連携作業が完結",
        "連携作業の効率化を実現",
        "運用負荷の大幅な軽減",
        "統一された管理方法の確立"
      ],
      learnings: [
        "ビジネスサイド向けUI設計の重要性",
        "既存システムの改善手法",
        "運用フローの最適化方法",
        "エンジニアコスト削減のアプローチ",
        "管理画面設計のベストプラクティス"
      ],
      technicalDetails: {
        architecture: "管理画面による連携設定自動化システム。既存システムとの整合性を保ちながら、ビジネスサイドが直感的に操作できるUI設計。",
        database: "連携設定情報の管理と既存システムとの連携。設定変更履歴の追跡機能。",
        apis: ["管理画面API", "連携設定API", "既存システム連携API"],
        challenges: ["既存システムとの整合性確保", "ビジネスサイド向けUI設計", "運用フローの最適化"]
      }
    },
    9: {
      id: 9,
      title: "新規ユーザー流入システムを0から作り変えた話",
      period: "2024年4月 - 2025年1月",
      category: "システム構築",
      description: "10年近く前に作られたレガシーな新規ユーザー流入システムを丸ごと作り変え、運用に沿った管理しやすい体系を整備。Transaction概念の導入、GTM活用によるタグ連携の効率化、管理画面のUI/UX改善により、運用負荷を大幅に削減し、トラッキング精度を向上させた。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "GTM", "AWS", "Redash"],
      teamSize: "4名",
      role: "プロジェクトマネージャー・設計・開発・ディレクション",
      background: "Affi unitはメディア事業本部内でも大きな売り上げを支えるUnitであるが、主に利用しているシステムは10年近く前に作られたレガシーシステムで、都度パッチ当ての改修を重ねてきて、対応するエンジニアのリソースコストが膨れてきていた。該当システムの実装当時から時間が経ち、想定されていた目的やコンセプトから外れた利用のされ方や、調査やリカバリのしにくさなど散見され、インシデントの見える化をしたことによってより目立つようになってきた。",
      challenges: [
        "10年近く前に作られたレガシーシステムの複雑化",
        "運用負荷の高さ（夜なべでの扉絵設定など）",
        "トラッキング漏れによる出稿先とのコミュニケーション負荷",
        "システムの設計が古く、保守運用時のリスクが高い",
        "新たなビジネス要件や分析ニーズへの対応困難",
        "仕様が複雑で、把握している人が居ない状態"
      ],
      solutions: [
        "Transaction概念の導入による状態管理の一元化",
        "GTM活用によるタグ連携の効率化",
        "管理画面のUI/UX改善（時間設定機能など）",
        "出稿先ごとの出稿管理機能の実装",
        "データ計測基盤の改善とログの担保",
        "外部連携の効率化（運用だけで出稿作業完結）"
      ],
      results: [
        "運用負荷を大幅に削減（夜なべでの扉絵設定作業を廃止）",
        "トラッキング精度を向上（旧システムとほぼ同値で計測可能）",
        "出稿先ごとの管理が容易になり、分析しやすくなった",
        "離脱ポイントの可視化により、施策打ちやすさを向上",
        "セキュリティ向上（クエリパラメータでのデータ持ち回りを廃止）",
        "データの整合性とログの担保を実現"
      ],
      learnings: [
        "レガシーシステムの刷新手法",
        "Transaction概念による状態管理設計",
        "GTM活用によるタグ連携の効率化",
        "管理画面のUI/UX改善手法",
        "プロジェクトマネジメントとディレクション",
        "ビジネスサイドとの合意形成手法",
        "大規模システムの段階的移行戦略"
      ],
      technicalDetails: {
        architecture: "Transaction概念を導入した新規ユーザー流入システム。GTM活用によるタグ連携、管理画面による運用効率化、データ計測基盤の改善を組み合わせた包括的なシステム刷新。",
        database: "Transaction.uuidによる状態管理、進行度合いの計測や、外部から渡ってくるクエリパラメータの即座保存。",
        apis: ["Transaction管理API", "GTM連携API", "管理画面API", "データ計測API", "Redash監視API"],
        challenges: ["レガシーシステムからの段階的移行", "Transaction概念の設計", "GTM活用による連携効率化", "管理画面のUI/UX改善"]
      }
    }
  };

  const project = projects[parseInt(params.id)];

  if (!project) {
    return (
      <div className="container mx-auto p-4">
        <Navbar />
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">プロジェクトが見つかりません</h1>
          <Link href="/resume/carta" className="text-blue-600 hover:text-blue-800">
            一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "システム改善": "from-green-500 to-green-600",
      "インフラ・移行": "from-blue-500 to-blue-600",
      "企画・開発": "from-purple-500 to-purple-600",
      "モバイル開発": "from-orange-500 to-orange-600",
      "API連携": "from-indigo-500 to-indigo-600",
      "システム構築": "from-red-500 to-red-600",
      "AWS・連携": "from-yellow-500 to-yellow-600",
      "システム連携": "from-teal-500 to-teal-600"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getCategoryTextColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "システム改善": "text-green-700",
      "インフラ・移行": "text-blue-700",
      "企画・開発": "text-purple-700",
      "モバイル開発": "text-orange-700",
      "API連携": "text-indigo-700",
      "システム構築": "text-red-700",
      "AWS・連携": "text-yellow-700",
      "システム連携": "text-teal-700"
    };
    return colors[category] || "text-gray-700";
  };

  return (
    <div className="container mx-auto p-4 space-y-14">
      <Navbar />
      
      {/* パンくずリスト */}
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/resume" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Resume
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <Link href="/resume/carta" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">CARTA HOLDINGS</Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{project.title}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto">
        {/* ヘッダー */}
        <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white p-8 rounded-lg mb-8`}>
          <div className="flex items-center justify-between mb-4">
            <span className="bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{project.category}</span>
            <p className="text-white/80">{project.period}</p>
          </div>
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-white/90 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* プロジェクト情報 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border rounded-lg p-6">
            <h3 className={`text-lg font-semibold mb-4 ${getCategoryTextColor(project.category)}`}>プロジェクト概要</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">チーム構成:</span>
                <span className="font-medium">{project.teamSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">役割:</span>
                <span className="font-medium">{project.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">期間:</span>
                <span className="font-medium">{project.period}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border rounded-lg p-6">
            <h3 className={`text-lg font-semibold mb-4 ${getCategoryTextColor(project.category)}`}>技術スタック</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span key={index} className={`bg-gray-100 ${getCategoryTextColor(project.category)} px-2 py-1 rounded text-sm`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 詳細セクション */}
        <div className="space-y-6">
          <section className="bg-white border rounded-lg p-6">
            <h3 className={`text-xl font-semibold mb-4 ${getCategoryTextColor(project.category)}`}>プロジェクト背景</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.background}
            </p>
          </section>

          <section className="bg-white border rounded-lg p-6">
            <h3 className={`text-xl font-semibold mb-4 ${getCategoryTextColor(project.category)}`}>課題・チャレンジ</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white border rounded-lg p-6">
            <h3 className={`text-xl font-semibold mb-4 ${getCategoryTextColor(project.category)}`}>解決策・アプローチ</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </section>

          {project.technicalDetails && (
            <section className="bg-white border rounded-lg p-6">
              <h3 className={`text-xl font-semibold mb-4 ${getCategoryTextColor(project.category)}`}>技術詳細</h3>
              <div className="space-y-4">
                {project.technicalDetails.architecture && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">アーキテクチャ</h4>
                    <p className="text-gray-600 text-sm">{project.technicalDetails.architecture}</p>
                  </div>
                )}
                {project.technicalDetails.database && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">データベース設計</h4>
                    <p className="text-gray-600 text-sm">{project.technicalDetails.database}</p>
                  </div>
                )}
                {project.technicalDetails.apis && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">主要なAPI・機能</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      {project.technicalDetails.apis.map((api, index) => (
                        <li key={index}>{api}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          <section className="bg-white border rounded-lg p-6">
            <h3 className={`text-xl font-semibold mb-4 ${getCategoryTextColor(project.category)}`}>成果・学び</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">成果</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">学び</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  {project.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* 戻るボタン */}
        <div className="mt-8 text-center">
          <Link 
            href="/resume/carta" 
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${getCategoryColor(project.category).replace('from-', 'bg-').replace(' to-', '')} hover:opacity-90 transition-opacity`}
          >
            ← プロジェクト一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 