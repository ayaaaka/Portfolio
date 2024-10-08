import React from 'react';

const WorkExperience = ({ year, company, role, details }) => {
  return (
    <div className="flex mb-10 work-experience" style={{marginTop: '40px'}}>
      <div className="flex-shrink-0 w-16 text-right pr-4">
        <span className="text-xl font-semibold">{year}</span>
      </div>
      <span
        style={{
          width: '13px',
          height: '13px',
          backgroundColor: 'black',
          borderRadius: '50%',
          border: '1px solid black',
          display: 'block',
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: '5px',
        }}
      ></span>
      <div className="flex-grow border-l-2 border-gray-300 pl-4 relative">
        <div className="mb-2">
          <span className="block font-semibold">{company}</span>
        </div>
        <span className="block">{role}</span>
        <ul className="list-disc list-inside">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="absolute -left-8 top-0 h-full flex items-center justify-center">
      <span className="w-4 h-4 bg-black rounded-full border border-black"></span>
    </div>
    </div>
  );
};

export default WorkExperience;
