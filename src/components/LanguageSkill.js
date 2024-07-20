import React from 'react';

const LanguageSkill = ({ language, level }) => {
  const numericLevel = parseInt(level, 10);
  const dots = Array(5).fill(0).map((_, index) => (
    <span
      key={index}
      className={`border ${index < numericLevel ? 'bg-black border-black' : 'bg-white border-black'}`}
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