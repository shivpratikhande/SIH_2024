import React from 'react';

const Precedents = () => {
  // Sample data for precedents
  const precedentsData = [
    { caseNumber: '001', description: 'Case where defendant was acquitted based on self-defense.', date: '2023-01-15', status: 'Closed' },
    { caseNumber: '002', description: 'Case involving breach of contract with a focus on damages.', date: '2023-02-20', status: 'Reviewed' },
    { caseNumber: '003', description: 'Case where previous judgments were used to determine liability.', date: '2023-03-10', status: 'Pending' },
    { caseNumber: '004', description: 'Landmark case on intellectual property rights.', date: '2023-04-05', status: 'Approved' },
    { caseNumber: '005', description: 'Case dealing with corporate fraud and its legal implications.', date: '2023-05-22', status: 'Closed' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Legal Precedents</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <ul>
          {precedentsData.map((precedent) => (
            <li key={precedent.caseNumber} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <div className="font-bold text-lg">{precedent.caseNumber}</div>
              <div className="mt-1">{precedent.description}</div>
              <div className="mt-1 text-sm text-gray-500">Date: {precedent.date}</div>
              <div className="mt-1 text-sm">
                Status: <span className={precedent.status === 'Pending' ? 'text-yellow-500' : precedent.status === 'Reviewed' ? 'text-blue-500' : 'text-green-500'}>{precedent.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Precedents;
