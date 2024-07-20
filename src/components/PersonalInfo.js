import React from 'react';

const PersonalInfo = ({imageUrl}) => {
  return (
    <div className="personal-info">
      <img src={imageUrl} alt="Profile Picture" className="profile-picture" />
      <h2>Ayaka Kobayashi</h2>
      <p>フルスタックエンジニア</p>
      <p>1997 / 02 / 28</p>
      <p>東京都西東京市ひばりが丘</p>
      <p>elnr28br@gmail.com</p>
    </div>
  );
};

export default PersonalInfo;
