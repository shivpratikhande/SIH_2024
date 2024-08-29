import React from 'react';

const Cases = () => {
  // Sample data for cases
  const casesData = [
    { caseId: 'C001', clientName: 'Alice Johnson', caseType: 'Civil', status: 'Open', lastUpdated: '2024-08-15' },
    { caseId: 'C002', clientName: 'Bob Smith', caseType: 'Criminal', status: 'Closed', lastUpdated: '2024-07-22' },
    { caseId: 'C003', clientName: 'Charlie Brown', caseType: 'Family', status: 'In Progress', lastUpdated: '2024-08-10' },
    { caseId: 'C004', clientName: 'Diana Prince', caseType: 'Corporate', status: 'Open', lastUpdated: '2024-08-12' },
    { caseId: 'C005', clientName: 'Edward Snowden', caseType: 'Civil', status: 'Open', lastUpdated: '2024-08-18' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cases</h1>
      <p>Here you can view and manage all the cases.</p>

      {/* Table displaying cases */}
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="w-full bg-gray-100 text-gray-600">
            <th className="py-2 px-4 border-b">Case ID</th>
            <th className="py-2 px-4 border-b">Client Name</th>
            <th className="py-2 px-4 border-b">Case Type</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {casesData.map((caseItem, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{caseItem.caseId}</td>
              <td className="py-2 px-4 border-b">{caseItem.clientName}</td>
              <td className="py-2 px-4 border-b">{caseItem.caseType}</td>
              <td className="py-2 px-4 border-b">{caseItem.status}</td>
              <td className="py-2 px-4 border-b">{caseItem.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cases;
