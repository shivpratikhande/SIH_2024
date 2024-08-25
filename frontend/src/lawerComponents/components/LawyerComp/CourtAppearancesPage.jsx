import React from 'react';

const CourtAppearances = () => {
  const appearances = [
    { id: 1, case: 'Case #12345', date: 'Sep 10, 2024', time: '9:00 AM', location: 'Courtroom 2B' },
    { id: 2, case: 'Case #67890', date: 'Sep 12, 2024', time: '11:00 AM', location: 'Courtroom 3A' },
    { id: 3, case: 'Case #24680', date: 'Sep 15, 2024', time: '1:00 PM', location: 'Virtual - Zoom' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Court Appearances</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <ul>
          {appearances.map((appearance) => (
            <li key={appearance.id} className="mb-2 p-2 bg-gray-100 rounded">
              <div className="font-bold">Case: {appearance.case}</div>
              <div>Date: {appearance.date}</div>
              <div>Time: {appearance.time}</div>
              <div>Location: {appearance.location}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourtAppearances;
