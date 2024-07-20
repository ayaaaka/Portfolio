import React from 'react';
import PersonalInfo from '../../components/PersonalInfo';
import SkillBar from '../../components/SkillBar';
import LanguageSkill from '../../components/LanguageSkill';
import WorkExperience from '../../components/WorkExperience';
import TitleWithIcon from '../../components/TitleWithIcon';
import Navbar from '@/components/Navbar';
import '../../styles/profile.css';
import { faHeart, faLanguage } from '@fortawesome/free-solid-svg-icons';


const ProfilePage = () => {
  return (
    <div className="container space-y-10">
      <Navbar />
      <div className="left-column ">
        <PersonalInfo imageUrl={'/img/profile/bear.png'}/>
        <br />
        <TitleWithIcon icon={faHeart} title={'パーソナルスキル'} />
        <div className="personal-skills">
          <SkillBar skill="創造性" percentage={70} />
          <SkillBar skill="革新性" percentage={70} />
          <SkillBar skill="チームワーク" percentage={100} />
          <SkillBar skill="コミュニケーション" percentage={80} />
          <SkillBar skill="組織化・編成" percentage={60} />
          <SkillBar skill="リーダーシップ" percentage={90} />
        </div>
        <br />
        <div className="language-skills">
          <TitleWithIcon icon={faLanguage} title={'語学'} />
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
            year="2016" 
            company="株式会社 Gods" 
            role="iOSエンジニア アルバイト" 
            details={["受託開発", "某ジムの受付アプリ"]} 
          />
          <WorkExperience 
            year="2017" 
            company="株式会社 CANDLE" 
            role="iOSエンジニア アルバイト" 
            details={["自社開発", "女性向けアプリの改修・保守"]} 
          />
          <WorkExperience 
            year="2018" 
            company="株式会社 VOYAGE GROUP" 
            role="webエンジニア アルバイト" 
            details={["自社開発", "ポイントサイトの設計・開発・保守"]} 
          />
          <WorkExperience 
            year="2019" 
            company="株式会社 VOYAGE GROUP 入社" 
            role="webエンジニア 正社員" 
            details={["自社開発", "ポイントサイトの設計・開発・保守"]} 
          />
          <WorkExperience 
            year="2020" 
            company="株式会社 CARTA HOLDINGS" 
            role="フルスタックエンジニア 正社員" 
            details={["自社開発", "ポイントサイトの企画・設計・開発・保守", "プロダクトマネージャー"]} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
