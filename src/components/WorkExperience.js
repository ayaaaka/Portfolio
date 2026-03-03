import React from 'react';
import Link from 'next/link';

const WorkExperience = ({ year, company, role, details, link }) => {
  return (
    <div className="flex mb-10 mt-10 work-experience">
      <div className="flex-shrink-0 w-16 text-right pr-4">
        <span className="text-xl font-semibold">{year}</span>
      </div>
      <span className="w-3 h-3 bg-black rounded-full border border-black ml-2.5 mr-2.5 mt-1.5 flex-shrink-0"></span>
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
        {link && (
          <div className="mt-5">
            <Link
              href={link}
              className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-base shadow hover:shadow-md transition-all"
            >
              業務詳細をもっと見る
              <span className="ml-2 text-lg">→</span>
            </Link>
          </div>
        )}
      </div>
      <div className="absolute -left-8 top-0 h-full flex items-center justify-center">
        <span className="w-4 h-4 bg-black rounded-full border border-black"></span>
      </div>
    </div>
  );
};

export default WorkExperience;
