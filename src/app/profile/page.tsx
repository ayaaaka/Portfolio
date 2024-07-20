import React from 'react';
import PersonalInfo from '../../components/PersonalInfo';
import SkillBar from '../../components/SkillBar';
import LanguageSkill from '../../components/LanguageSkill';
import WorkExperience from '../../components/WorkExperience';
import '../../styles/profile.css';

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="left-column">
        <PersonalInfo />
        <div className="personal-skills">
          <h2>パーソナルスキル</h2>
          <SkillBar skill="創造性" percentage={60} />
          <SkillBar skill="革新性" percentage={85} />
          <SkillBar skill="チームワーク" percentage={100} />
          <SkillBar skill="コミュニケーション" percentage={95} />
          <SkillBar skill="組織化・編成" percentage={55} />
          <SkillBar skill="リーダーシップ" percentage={60} />
        </div>
        <div className="language-skills">
          <h2>語学</h2>
          <LanguageSkill language="英語" level="TOEIC 850" score="高" />
          <LanguageSkill language="中国語" level="基礎" score="中" />
        </div>
      </div>
      <div className="right-column">
        <h2>職務経歴</h2>
        <div className="work-summary">
          <p>大学卒業後、○○株式会社にWebデザイナーとして・・・</p>
        </div>
        <div className="work-details">
          <WorkExperience 
            year="2004" 
            company="株式会社OO" 
            role="Webデザイン" 
            details={["プロジェクト内容1", "プロジェクト内容2", "プロジェクト内容3"]} 
          />
          <WorkExperience 
            year="2007" 
            company="Aデザイン事務所" 
            role="Webデザイン" 
            details={["プロジェクト内容1", "プロジェクト内容2", "プロジェクト内容3"]} 
          />
          <WorkExperience 
            year="2010" 
            company="XXデザイン会社" 
            role="クリエイティブディレクター" 
            details={["プロジェクト内容1", "プロジェクト内容2", "プロジェクト内容3"]} 
          />
          <WorkExperience 
            year="2017" 
            company="OOインターナショナル" 
            role="デジタルマーケター" 
            details={["プロジェクト内容1", "プロジェクト内容2", "プロジェクト内容3"]} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
