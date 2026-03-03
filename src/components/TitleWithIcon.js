import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from '@/styles/Resume.module.scss';

const TitleWithIcon = ({icon, title}) => {
  return (
    <div className={styles.titleIconWrapper}>
      <FontAwesomeIcon icon={icon} size='xl' />
      <h2 className={`${styles.lefttitleContainer} ${styles.lefttitle}`}>{title}</h2>
    </div>
  );
};

export default TitleWithIcon;
