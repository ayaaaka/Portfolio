import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from '@/styles/Resume.module.scss';

const TitleWithIcon = ({icon, title}) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <FontAwesomeIcon icon={icon} size='xl' />
    <h2 className={`text-2xl ${styles.lefttitleContainer}`}>{title}</h2>
  </div>
  );
};

export default TitleWithIcon;
