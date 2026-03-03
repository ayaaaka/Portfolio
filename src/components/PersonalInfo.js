import React from 'react';
import Image from 'next/image';

const PersonalInfo = ({imageUrl}) => {
  return (
    <div className="flex flex-col mt-10">
      <div className="w-36 h-36 relative rounded-full overflow-hidden mb-2.5">
        <Image src={imageUrl} alt="Resume Picture" width={150} height={150} />
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
