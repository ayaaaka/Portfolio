import React from 'react';

const LanguageSkill = ({ language, level, score }) => {
  return (
    <div className="language-skill">
      <p>{language} {level}</p>
      <p>{score}</p>
    </div>
  );
};

export default LanguageSkill;
