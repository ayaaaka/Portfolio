import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar">
      <p>{skill} {percentage}%</p>
      <div className="bar">
        <div className="fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
