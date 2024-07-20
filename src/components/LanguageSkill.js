import React from 'react';

const LanguageSkill = ({ language, level }) => {
  const dots = Array(5).fill(0).map((_, index) => (
    <span
      key={index}
      className={`inline-block ${
        index < level ? 'bg-black' : 'bg-gray-300'
      }`}
    ></span>
  ));

  return (
    <div className="language-skill">
      <div className="items-center">
        <span>{language}</span>
        <div className="flex">{dots}</div>
      </div>
    </div>
  );
};

export default LanguageSkill;
