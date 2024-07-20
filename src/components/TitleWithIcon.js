import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const TitleWithIcon = ({icon, title}) => {
  return (
    <div className="flex flex-col items-center mt-10">
      <FontAwesomeIcon icon={icon} size='xl' />
    <h2 className="text-2xl font-semibold">{title}</h2>
  </div>
  );
};

export default TitleWithIcon;
