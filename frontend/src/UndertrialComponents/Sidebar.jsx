// src/components/Sidebar.jsx

import React from 'react';

const Sidebar = ({ handleNavigation, activeComponent }) => {
  const items = [
    { label: 'Bail Eligibility', value: 'BailEligibility' },
    { label: 'Case Details', value: 'CaseDetails' },
    { label: 'Bail Options', value: 'BailOptions' },
    { label: 'Application Assistance', value: 'ApplicationAssistance' },
    { label: 'Notification Center', value: 'NotificationCenter' },
    { label: 'Legal Resources', value: 'LegalResources' },
    { label: 'Choose Lawyer', value: 'ChooseLawyer' }
  ];

  return (
    <div style={{ backgroundColor: '#03346E' }} className="w-64 h-screen text-white lg:fixed lg:top-0 lg:left-0 lg:h-screen">
      <div className="p-4 text-2xl font-bold text-center">
        Undertrial Dashboard
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item.value}
            className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-[#03346E] ${activeComponent === item.value ? 'bg-white text-[#03346E] font-semibold' : ''}`}
            onClick={() => handleNavigation(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
