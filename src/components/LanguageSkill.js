import React from 'react';

const LanguageSkill = ({ language, level }) => {
  const numericLevel = parseInt(level, 10);
  const dots = Array(5).fill(0).map((_, index) => (
    //TODO: きれいにしたい
    <span
      key={index}
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        margin: '0 4px',
        border: '1px solid black',
        backgroundColor: index < level ? 'black' : 'white'
      }}
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