import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaGavel, FaSearch } from 'react-icons/fa';

const HearingSchedulePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy hearing schedule
  const dummySchedule = [
    { id: 1, date: "2024-09-01", caseTitle: "Case 001: John Doe vs State", time: "10:00 AM", location: "Courtroom A", judge: "Judge Williams" },
    { id: 2, date: "2024-09-02", caseTitle: "Case 002: Jane Smith vs City", time: "02:00 PM", location: "Courtroom B", judge: "Judge Davis" },
    { id: 3, date: "2024-09-03", caseTitle: "Case 003: Michael Brown vs Corporation", time: "11:00 AM", location: "Courtroom C", judge: "Judge Thompson" },
    { id: 4, date: "2024-09-04", caseTitle: "Case 004: Emily White vs Government", time: "03:00 PM", location: "Courtroom D", judge: "Judge Roberts" },
    { id: 5, date: "2024-09-05", caseTitle: "Case 005: David Green vs Company", time: "09:00 AM", location: "Courtroom E", judge: "Judge Martinez" },
  ];

  // Filter schedule based on search query
  const filteredSchedule = dummySchedule.filter((hearing) =>
    hearing.caseTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">Hearing Schedule</h2>

      {/* Search Box */}
      <div className="mb-6">
         <div className="flex items-center space-x-4 w-full max-w-full">
          <input
            type="text"
            placeholder="Search by Case Title"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-lg p-3 flex-1"
          />
          <button
            onClick={() => setSearchQuery(searchQuery)} // Trigger search when button is clicked
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center"
          >
            <FaSearch className="w-5 h-5 mr-2" />
            <span className="font-semibold">Search</span>
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {filteredSchedule.map((hearing) => (
          <li
            key={hearing.id}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-blue-500 w-6 h-6 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800 text-left">{hearing.caseTitle}</h3>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="text-yellow-500 w-5 h-5 mr-2" />
              <p className="text-gray-700 text-left">Time: {hearing.time}</p>
            </div>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-green-500 w-5 h-5 mr-2" />
              <p className="text-gray-700 text-left">Location: {hearing.location}</p>
            </div>
            <div className="flex items-center">
              <FaGavel className="text-red-500 w-5 h-5 mr-2" />
              <p className="text-gray-700 text-left">Judge: {hearing.judge}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HearingSchedulePage;
