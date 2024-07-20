import React from 'react';

const WorkExperience = ({ year, company, role, details }) => {
  return (
    <div className="work-experience">
      <h3>{year}</h3>
      <p>{company}</p>
      <p>{role}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
