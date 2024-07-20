import React from 'react';
import Image from 'next/image';
import '../styles/profile.css'

const PersonalInfo = ({imageUrl}) => {
  return (
    <div className="flex flex-col items-center text-center mt-10 personal-info">
      <div className="w-36 h-36 relative profile-picture">
        <Image src={imageUrl} alt="Profile Picture" className="profile-picture" width={200} height={200} />
      </div>
      <h2 className="mt-4 text-xl font-bold">Ayaka Kobayashi</h2>
      <p className="mt-2">フルスタックエンジニア</p>
      <p>1997 / 02 / 28</p>
      <p>東京都西東京市ひばりが丘</p>
      <p>elnr28br@gmail.com</p>
    </div>
  );
};

export default PersonalInfo;
