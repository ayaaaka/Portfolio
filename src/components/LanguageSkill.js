import React from 'react';
import styles from '@/styles/Resume.module.scss';

const LanguageSkill = ({ language, level }) => {
  const dots = Array(5).fill(0).map((_, index) => (
    <span
      key={index}
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        margin: '0 4px',
        border: '1px solid black',
        backgroundColor: index < level ? 'black' : 'white',
        display: 'inline-block'
      }}
    ></span>
  ));

  return (
    <div className={styles.languageSkill}>
      <div className={styles.itemsCenter}>
        <div className={styles.flex}>{language}</div>
        <div>{dots}</div>
      </div>
    </div>
  );
};

export default LanguageSkill;