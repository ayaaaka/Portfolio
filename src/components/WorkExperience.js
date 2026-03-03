'use client';
import React from 'react';
import Link from 'next/link';

const WorkExperience = ({ year, company, role, details, link }) => {
  return (
    <div className="flex mb-10 work-experience" style={{marginTop: '40px'}}>
      <div className="flex-shrink-0 w-16 text-right pr-4">
        <span className="text-xl font-semibold">{year}</span>
      </div>
      <span
        style={{
          width: '13px',
          height: '13px',
          minWidth: '13px',
          minHeight: '13px',
          backgroundColor: 'black',
          borderRadius: '50%',
          border: '1px solid black',
          display: 'block',
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: '5px',
          flexShrink: 0,
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
        {link && (
          <div style={{ marginTop: '20px' }}>
            <Link
              href={link}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: '#2563eb',
                color: 'white',
                fontWeight: '600',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              業務詳細をもっと見る
              <span style={{ marginLeft: '8px', fontSize: '18px' }}>→</span>
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
