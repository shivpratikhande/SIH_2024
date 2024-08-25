import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#03346E' }} className="w-64 h-screen text-white">
      <div className="p-2 text-2xl font-bold">Lawyer Dashboard</div>
      <ul className="mt-6">
        <li className="p-4">
          <NavLink
            to="notifications"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Notifications
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="clients"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Clients
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="client-documents"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Client Documents
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="client-meetings"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Client Meetings
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="document-upload"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Document Upload
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="court-appearances"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Court Appearances
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="precedents-used"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Precedents Used
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="cases"
            className="hover:bg-slate-400 block px-4 py-1 rounded"
          >
            Cases
          </NavLink>
        </li>
        <li className="hover:bg-slate-400 block px-7 py-1 rounded cursor-pointer">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
