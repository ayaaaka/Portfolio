import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <img src="/profile.jpg" alt="Profile Picture" className="profile-picture" />
      <h2>山田 花子</h2>
      <p>Webデザイナー / デジタルマーケター</p>
      <p>1981 / 07 / 23</p>
      <p>東京都杉並区OOO1-2-3</p>
      <p>090-0000-0000</p>
      <p>hanakoyamada@gmail.com</p>
      <p><a href="https://www.portfolio.com">https://www.portfolio.com</a></p>
    </div>
  );
};

export default PersonalInfo;
