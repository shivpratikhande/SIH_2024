import React from 'react';
import { NavLink } from 'react-router-dom';

const JudgeSidebar = () => {
  return (
    <div style={{ backgroundColor: '#03346E' }} className="w-64 h-screen text-white lg:fixed lg:top-0 lg:left-0 lg:h-screen overflow-y-auto">
      <div className="p-4 text-2xl font-bold text-center bg-[#022d6d]">
        Judge Dashboard
      </div>
      <ul className="mt-4 space-y-2">
        <li>
          <NavLink
            to="/judge/case-overview"
            className={({ isActive }) => 
              `block px-4 py-2 rounded-lg transition-colors duration-300 ${
                isActive ? 'bg-white text-[#03346E] font-semibold' : 'hover:bg-white hover:text-[#03346E]'
              }`
            }
          >
            Case Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/judge/hearing-schedule"
            className={({ isActive }) => 
              `block px-4 py-2 rounded-lg transition-colors duration-300 ${
                isActive ? 'bg-white text-[#03346E] font-semibold' : 'hover:bg-white hover:text-[#03346E]'
              }`
            }
          >
            Hearing Schedule
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/judge/notifications"
            className={({ isActive }) => 
              `block px-4 py-2 rounded-lg transition-colors duration-300 ${
                isActive ? 'bg-white text-[#03346E] font-semibold' : 'hover:bg-white hover:text-[#03346E]'
              }`
            }
          >
            Notifications
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default JudgeSidebar;
