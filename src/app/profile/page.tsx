import React from 'react';
import PersonalInfo from '../../components/PersonalInfo';
import SkillBar from '../../components/SkillBar';
import LanguageSkill from '../../components/LanguageSkill';
import WorkExperience from '../../components/WorkExperience';
import Navbar from '@/components/Navbar';
import '../../styles/profile.css';


const ProfilePage = () => {
  return (
    <div className="container items-center space-y-14">
      <Navbar />
      <div className="left-column ">
        <PersonalInfo imageUrl={'/img/profile/bear.png'}/>
        <br />
        <div className="personal-skills">
          <h2>パーソナルスキル</h2>
          <SkillBar skill="創造性" percentage={70} />
          <SkillBar skill="革新性" percentage={70} />
          <SkillBar skill="チームワーク" percentage={100} />
          <SkillBar skill="コミュニケーション" percentage={80} />
          <SkillBar skill="組織化・編成" percentage={60} />
          <SkillBar skill="リーダーシップ" percentage={90} />
        </div>
        <br />
        <div className="language-skills">
          <h2>語学</h2>
          <LanguageSkill language="日本語" level={5} />
          <LanguageSkill language="英語" level={2} />
        </div>
      </div>
      <div className="right-column">
        <h2>職務経歴</h2>
        <div className="work-summary">
          <p>あああああ</p>
        </div>
        <div className="work-details">
          <WorkExperience 
            year="2017" 
            company="株式会社 Gods" 
            role="iOSエンジニア" 
            details={["受託開発", "某ジムの受付アプリ"]} 
          />
          <WorkExperience 
            year="2017" 
            company="株式会社 CANDLE" 
            role="Webデザイン" 
            details={["自社開発", "女性向けアプリの改修・保守"]} 
          />
          <WorkExperience 
            year="2018" 
            company="株式会社 VOYAGE GROUP 入社" 
            role="webエンジニア" 
            details={["自社開発", "ポイントサイトの設計・開発・保守"]} 
          />
          <WorkExperience 
            year="2020" 
            company="株式会社 CARTA HOLDINGS" 
            role="フルスタックエンジニア" 
            details={["自社開発", "ポイントサイトの企画・設計・開発・保守", "プロダクトマネージャー"]} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
