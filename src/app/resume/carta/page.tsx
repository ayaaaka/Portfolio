import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const CartaProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "広告出稿における外部連携先との繋ぎ込み作業を管理画面化",
      period: "2024年2月 - 2024年5月",
      category: "システム改善",
      description: "外部連携との繋ぎ込みシステムの現状調査とビジネスサイドと協業して管理画面の設計。今まで連携の度にエンジニアコストがかかっていたのを0にし、ビジネスサイドのみで完結できるようにした。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "2名",
      role: "計画・設計・実装"
    },
    {
      id: 2,
      title: "EUC-JPのデータベースをUTF-8に移行",
      period: "2023年4月 - 2023年7月",
      category: "インフラ・移行",
      description: "どのように移行するかの選定や移行スクリプトなどの準備、実際の移行計画の用意・周知やリハーサル・本番を通して3名のチームで実施。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW", "ECS", "StepFunction"],
      teamSize: "3名",
      role: "計画・設計・実装"
    },
    {
      id: 3,
      title: "新しいユーザ訪問訴求コンテンツの作成",
      period: "2022年12月 - 2023年2月",
      category: "企画・開発",
      description: "コンテンツの企画から携わり、設計から開発まですべてを担当。ユーザの訪問訴求コンテンツを何かしら作りたいという要望から、要件を決めていきリリースまで持っていった。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "3名",
      role: "企画・設計・開発"
    },
    {
      id: 4,
      title: "自社のアプリへの機能追加",
      period: "2022年7月 - 2022年9月",
      category: "モバイル開発",
      description: "アカウント削除機能と、会員登録時の氏名の入力補完のタスクを実施。",
      skills: ["Swift", "AppTrackingTransparency", "AuthenticationServices", "Sign in with Apple JS"],
      teamSize: "2名",
      role: "設計・開発"
    },
    {
      id: 5,
      title: "ギフト券発券APIを叩き、サービス内でギフト発券を可能に",
      period: "2020年11月 - 2021年2月",
      category: "API連携",
      description: "運用者が対象ユーザのメールアドレスをuploadすると対象者に対してギフト券の発券ができる状態にさせるサービスを作成。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "3名",
      role: "設計・開発"
    },
    {
      id: 6,
      title: "新規アフィリエイトシステムの設計〜構築",
      period: "2020年2月 - 2020年6月",
      category: "システム構築",
      description: "設計、開発、効果測定、保守のすべてを主に一人で担当。設計や開発段階ではチーム全体への共有や相談会を行い仕様を固めていった。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "約2名",
      role: "設計・開発"
    },
    {
      id: 7,
      title: "Backlogの通知をSlack連携させる",
      period: "2019年12月 - 2020年1月",
      category: "AWS・連携",
      description: "既存のBacklogの通知だと、中身まで出てしまい機微情報がSlackに流れるのを防ぎたいため、自前でAPI Gateway, Lambda, Cloudwatchなどを扱い実装。",
      skills: ["Go", "MySQL", "Linux/UNIX", "Lambda", "API Gateway", "Cloudwatch"],
      teamSize: "2名",
      role: "設計・開発"
    },
    {
      id: 8,
      title: "メディアとの連携掲載",
      period: "2019年7月 - 2019年8月",
      category: "システム連携",
      description: "担当しているECサイトから、メディアサイトへ誘導をかけコメントをした場合にリアルタイムでポイントを付与される全体のシステムを設計から開発、運用保守まで実施。",
      skills: ["PHP7.3", "JavaScript", "SQL", "HTML", "CSS", "MySQL", "Linux/UNIX", "自社FW"],
      teamSize: "3名",
      role: "設計・開発・運用保守"
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
      "システム連携": "border-teal-500 bg-teal-50"
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
      "システム連携": "text-teal-700"
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
      "システム連携": "hover:text-teal-800"
    };
    return colors[category] || "hover:text-gray-800";
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
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">CARTA HOLDINGS</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">株式会社 CARTA HOLDINGS</h1>
        <p className="text-gray-600 mb-2">フルスタックエンジニア 正社員</p>
        <p className="text-gray-600">2019年 - 現在</p>
        <p className="text-gray-600 mt-4">
          自社開発のポイントサイトの企画・設計・開発・保守を担当し、フルサイクルエンジニアとして活動。<br />
          幅広いプロダクトを新卒時からリードし、チームリーダーとしてマネジメント業務を行った経験もあります。<br />
          現在はプロジェクトマネージャー（PM）としてプロジェクトを指揮し、プレイヤーとして実務もこなしています。<br />
        </p>
      </div>

      {/* プロジェクト一覧 */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className={`border-l-4 ${getCategoryColor(project.category)} p-4 rounded-r-lg`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-sm text-gray-500">{project.period}</span>
            </div>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {project.skills.map((skill, index) => (
                  <span key={index} className="bg-white text-gray-800 text-xs px-2 py-1 rounded border">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">
                  チーム: {project.teamSize} | 役割: {project.role}
                </div>
                <Link href={`/resume/carta/${project.id}`} className={`text-sm font-medium ${getCategoryTextColor(project.category)} ${getCategoryHoverColor(project.category)} transition-colors`}>
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartaProjectsPage; 