import React from 'react';

const LanguageSkill = ({ language, level }) => {
  const dots = Array(5).fill(0).map((_, index) => (
    <span
      key={index}
      className={`w-4 h-4 rounded-full mx-1 border border-black inline-block ${index < level ? 'bg-black' : 'bg-white'}`}
    ></span>
  ));

  return (
    <div className="my-2.5 text-base">
      <div className="flex justify-between my-5">
        <div className="text-right mr-2.5">{language}</div>
        <div>{dots}</div>
      </div>
    </div>
  );
};

export default LanguageSkill;
