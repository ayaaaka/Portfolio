import React from 'react';
import PersonalInfo from '@/components/PersonalInfo';
import SkillBar from '@/components/SkillBar';
import LanguageSkill from '@/components/LanguageSkill';
import WorkExperience from '@/components/WorkExperience';
import TitleWithIcon from '@/components/TitleWithIcon';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Resume.module.scss';
import { faHeart,  faComment } from '@fortawesome/free-solid-svg-icons';

const ResumePage = () => {
  return (
    <div className="container mx-auto p-4 space-y-14">
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <PersonalInfo imageUrl={'/img/resume/bear.png'}/>
          <br />
          <TitleWithIcon icon={faHeart} title={'パーソナルスキル'} />
          <div className={styles.personalSkills}>
            <SkillBar skill="創造性" percentage={50} />
            <SkillBar skill="革新性" percentage={70} />
            <SkillBar skill="チームワーク" percentage={90} />
            <SkillBar skill="コミュニケーション" percentage={80} />
            <SkillBar skill="組織化・編成" percentage={50} />
            <SkillBar skill="リーダーシップ" percentage={50} />
          </div>
          <br />
          <div className={styles.languageSkills}>
            <TitleWithIcon icon={faComment} title={'語学'} />
            <LanguageSkill language="日本語" level={5} />
            <LanguageSkill language="英語" level={2} />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className="mb-4">
            <h1>職務略歴</h1>
            <p>大学在学中、学校の勉強だけでなく実践的な経験を積みたいと思い、iOSエンジニアとしてアルバイトを始めました。</p>
            <p>その後、就職活動では裁量の大きさや職場環境を重視して現在の会社に入社。</p>
            <p>入社後は、不正対策を施したアフィリエイトシステムの構築や、外部ASPとの連携、外部のギフト発券サービスの組み込みなど、幅広いプロダクトを新卒時からリードしてきました。</p>
            <p>株式会社DIGITALIOに所属していた際は、チームリーダーとしてマネジメント業務を行いながら、プロジェクトマネージャー（PM）としてプロジェクトを指揮し、プレイヤーとして実務もこなしておりました。</p>
            <p>現在は、株式会社CARTA ZEROに所属し、広告プラットフォームの保守・運用を行っております。</p>
          </div>
          <div className="margin-5">
          <h1>職務詳細</h1>
            <WorkExperience
              year="2016"
              company="株式会社 Gods"
              role="iOSエンジニア アルバイト"
              details={["受託開発", "某ジムの受付アプリ"]}
              link={undefined}
            />
            <WorkExperience
              year="2017"
              company="株式会社 CANDLE"
              role="iOSエンジニア アルバイト"
              details={["自社開発", "女性向けアプリの改修・保守"]}
              link={undefined}
            />
            <WorkExperience
              year="2019"
              company="株式会社 VOYAGE GROUP → 株式会社 CARTA HOLDINGS"
              role="正社員　新卒入社"
              details={["自社開発", "フルスタックエンジニア", "フルサイクルエンジニア"]}
              departments={[
                { period: "2019/04 〜 2023/01", name: "株式会社DIGITALIO メディア事業本部" },
                { period: "2023/02 〜 2025/10", name: "株式会社DIGITALIO Tech Unit" },
                { period: "2025/11 〜 現在",    name: "株式会社CARTA ZERO プロダクト管轄 開発局" },
              ]}
              departmentsLabel="所属部署・会社の変遷"
              link="/resume/carta"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
