import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const CartaProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "外部メディアとのAPI連携によるリアルタイムポイント付与システムの構築",
      period: "2019年7月 - 2019年9月",
      category: "API連携・システム設計",
      description: "ゴシップガールズトークとECナビのAPI連携を実装し、リアルタイムポイント付与システムを構築。バッチ通知での掲載によりCV数を約30倍に向上させ、売上も約30倍に増加。",
      skills: ["PHP", "MySQL", "Linux/UNIX", "AWS", "Redshift", "API Gateway", "Cloudwatch", "Datadog"],
      teamSize: "1名",
      role: "設計・開発・連携調整"
    },
    {
      id: 2,
      title: "CS対応業務における通知連携システムの開発",
      period: "2019年12月 - 2020年1月",
      category: "AWS・連携",
      description: "ECナビのCS対応用Backlogで課題の追加や更新・とりこぼしに気付きづらい問題を解決するため、BacklogのイベントをSlack通知させるシステムを新規開発。Lambdaとバッチ処理を組み合わせた独立したシステムを構築。",
      skills: ["Go", "MySQL", "Linux/UNIX", "Lambda", "API Gateway", "Cloudwatch", "PHP", "AWS", "Slack API", "Backlog Webhook API"],
      teamSize: "1名",
      role: "設計・開発"
    },
    {
      id: 3,
      title: "アフィリエイト不正対策システムの設計・構築",
      period: "2020年2月 - 2020年6月",
      category: "システム構築",
      description: "ECナビの定額アフィリエイトにおける不正CVポイント付与対策システムを設計・構築。トラッキングキー発行&DB保存方式による不正対策を実装し、現在多数のASPで運用中。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "Redshift", "ETL"],
      teamSize: "1名",
      role: "設計・開発・効果測定・保守"
    },
    {
      id: 4,
      title: "外部API連携によるギフト券発券の自動化",
      period: "2020年11月 - 2021年2月",
      category: "API連携",
      description: "ギフトオンデマンドのAPIを活用してギフト券を人を介さずにユーザーに渡せるシステムを構築。友達紹介やポイント懸賞での手作業によるギフト券配布を自動化した。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "外部API連携", "SES"],
      teamSize: "1名",
      role: "設計・開発・運用"
    },
    {
      id: 5,
      title: "iOSアプリのApple審査対応および機能追加",
      period: "2022年7月 - 2022年9月",
      category: "モバイル開発",
      description: "Apple審査で指摘されたアカウント削除機能とSign in with Appleでの氏名入力補完機能を実装し、無事アプリリリースに漕ぎ着けた。",
      skills: ["Swift", "AppTrackingTransparency", "AuthenticationServices", "Sign in with Apple JS", "Firebase", "iOS開発"],
      teamSize: "1名",
      role: "設計・開発・Apple交渉"
    },
    {
      id: 6,
      title: "ユーザー再訪問を促すコンテンツの企画・開発",
      period: "2022年12月 - 2023年2月",
      category: "企画・開発",
      description: "コンテンツの企画から携わり、設計から開発まですべてを担当。ユーザの訪問訴求コンテンツを何かしら作りたいという要望から、要件を決めていきリリースまで持っていった。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "2名",
      role: "企画・設計・開発"
    },
    {
      id: 7,
      title: "データベース文字コードのUTF-8移行",
      period: "2023年4月 - 2023年7月",
      category: "インフラ・移行",
      description: "どのように移行するかの選定や移行スクリプトなどの準備、実際の移行計画の用意・周知やリハーサル・本番を通して3名のチームで実施。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "ECS", "StepFunction"],
      teamSize: "3名",
      role: "計画・設計・実装"
    },
    {
      id: 8,
      title: "広告外部連携設定の管理画面化による運用効率化",
      period: "2024年2月 - 2024年5月",
      category: "システム改善",
      description: "外部連携との繋ぎ込みシステムの現状調査とビジネスサイドと協業して管理画面の設計。今まで連携の度にエンジニアコストがかかっていたのを0にし、ビジネスサイドのみで完結できるようにした。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "1名",
      role: "計画・設計・実装"
    },
    {
      id: 9,
      title: "新規ユーザー流入システムの全面刷新",
      period: "2024年4月 - 2025年1月",
      category: "システム構築",
      description: "10年近く前に作られたレガシーな新規ユーザー流入システムを丸ごと作り変え、運用に沿った管理しやすい体系を整備。Transaction概念の導入、GTM活用によるタグ連携の効率化、管理画面のUI/UX改善により、運用負荷を大幅に削減し、トラッキング精度を向上させた。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "GTM", "AWS", "Redash"],
      teamSize: "4名",
      role: "プロジェクトマネージャー・設計・開発・ディレクション"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "システム改善": "border-green-500 bg-green-50",
      "インフラ・移行": "border-blue-500 bg-blue-50",
      "企画・開発": "border-purple-500 bg-purple-50",
      "モバイル開発": "border-orange-500 bg-orange-50",
      "API連携": "border-indigo-500 bg-indigo-50",
      "システム構築": "border-red-500 bg-red-50",
      "AWS・連携": "border-yellow-500 bg-yellow-50",
      "API連携・システム設計": "border-teal-500 bg-teal-50"
    };
    return colors[category] || "border-gray-500 bg-gray-50";
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
      "API連携・システム設計": "text-teal-700"
    };
    return colors[category] || "text-gray-700";
  };

  const getCategoryHoverColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "システム改善": "hover:text-green-800",
      "インフラ・移行": "hover:text-blue-800",
      "企画・開発": "hover:text-purple-800",
      "モバイル開発": "hover:text-orange-800",
      "API連携": "hover:text-indigo-800",
      "システム構築": "hover:text-red-800",
      "AWS・連携": "hover:text-yellow-800",
      "API連携・システム設計": "hover:text-teal-800"
    };
    return colors[category] || "hover:text-gray-800";
  };

  return (
    <div className="container mx-auto px-4 py-4 space-y-8">
      <Navbar />
      
      {/* パンくずリスト */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
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
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">CARTA HOLDINGS</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">株式会社 CARTA HOLDINGS</h1>
        <p className="text-gray-600 mb-1 md:mb-2">フルスタック/フルサイクルエンジニア 正社員</p>
        <p className="text-gray-600 mb-3 md:mb-4">2019年 - 現在</p>
        <div className="text-gray-600 text-sm md:text-base space-y-6">
          <div className="space-y-2">
            <p className="leading-relaxed">入社当初から6年半にわたりポイントサイトの企画・設計・開発・保守を担当し、フルサイクルエンジニアとして活動。</p>
            <p className="leading-relaxed">要件定義から運用改善まで一貫して担うプロダクトエンジニア。技術・運用・ビジネスを横断し、仕組みから改善してきました。</p>
            <p className="leading-relaxed">2025年11月以降は広告事業領域へ異動し、広告配信・トラッキング・管理基盤に関わる開発および改善に取り組んでいます。</p>
          </div>

          <details className="group">
            <summary className="cursor-pointer list-none text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
              <span className="group-open:hidden">私の仕事スタイルをもっと詳しく見る👉️</span>
              <span className="hidden group-open:inline">閉じる👆️</span>
            </summary>

            <div className="mt-4 space-y-6">
              <div>
                <p className="font-semibold text-gray-700 mb-2">🛠 担当領域</p>
                <ul className="space-y-1 mb-3">
                  <li>● 要件定義・設計・実装・テスト・リリース・運用改善</li>
                  <li>● PHPを中心としたバックエンド開発</li>
                  <li>● 管理画面 / LP改修などのフロント実装</li>
                  <li>● データベース設計・改善</li>
                  <li>● 運用バッチ開発</li>
                  <li>● レガシーシステム改修</li>
                </ul>
                <p className="leading-relaxed">既存システムを前提とした改修案件が多く、複雑な依存関係を理解した上で安全に変更を進める開発を得意としています。</p>
              </div>

              <div>
                <p className="font-semibold text-gray-700 mb-2">🚀 推進してきたこと</p>
                <p className="leading-relaxed mb-2">最大7名規模のチームにてチームリーダーおよびプロダクトマネージャーを経験。</p>
                <ul className="space-y-1 mb-3">
                  <li>● 開発タスクの優先度整理・進行管理</li>
                  <li>● ビジネス要件と技術制約の調整</li>
                  <li>● 関係部署との合意形成</li>
                  <li>● 障害対応フロー・運用プロセスの整備</li>
                  <li>● ドキュメント文化・Issue管理の定着</li>
                </ul>
                <p className="leading-relaxed">属人的になりがちな運用や障害対応に対し、リアルタイム記録や情報共有フローを整備し、チーム全体で再現性のある体制づくりを推進してきました。</p>
              </div>

              <div>
                <p className="font-semibold text-gray-700 mb-2">💡 開発スタンス</p>
                <p className="leading-relaxed">単に機能を実装するだけでなく、「なぜその課題が発生しているのか」「運用を含めてどうすれば継続的に改善できるか」という視点を持ち、技術・運用・ビジネスのバランスを取りながらプロダクト改善を進めていくように意識しております。</p>
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* プロジェクト一覧 */}
      <div className="space-y-4">
        {projects.slice().reverse().map((project) => (
          <div key={project.id} className={`border-l-4 ${getCategoryColor(project.category)} p-3 md:p-4 rounded-r-lg`}>
            {/* タイトルと期間 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 md:mb-3">
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-0">{project.title}</h3>
              <span className="text-xs md:text-sm text-gray-500">{project.period}</span>
            </div>
            
            {/* 説明 */}
            <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{project.description}</p>
            
            {/* スキルタグ */}
            <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
              {project.skills.map((skill, index) => (
                <span key={index} className="bg-white text-gray-800 text-xs px-2 py-1 rounded border whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </div>
            
            {/* チーム情報と詳細リンク */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
              <div className="text-xs md:text-sm text-gray-500">
                チーム: {project.teamSize} | 役割: {project.role}
              </div>
              <Link href={`/resume/carta/${project.id}`} className={`text-sm font-medium ${getCategoryTextColor(project.category)} ${getCategoryHoverColor(project.category)} transition-colors self-start md:self-auto`}>
                詳細を見る →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartaProjectsPage; 