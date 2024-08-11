import React from 'react';
import styles from '@/styles/Resume.module.scss';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className={styles.skillBar}>
      <p>{skill} {percentage}%</p>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
