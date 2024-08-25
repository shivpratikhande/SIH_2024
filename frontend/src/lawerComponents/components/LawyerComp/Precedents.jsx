import React from 'react';

const Precedents = () => {
  // Sample data for precedents
  const precedentsData = [
    { caseNumber: '001', description: 'Case where defendant was acquitted based on self-defense.', date: '2023-01-15' },
    { caseNumber: '002', description: 'Case involving breach of contract with a focus on damages.', date: '2023-02-20' },
    { caseNumber: '003', description: 'Case where previous judgments were used to determine liability.', date: '2023-03-10' },
    { caseNumber: '004', description: 'Landmark case on intellectual property rights.', date: '2023-04-05' },
    { caseNumber: '005', description: 'Case dealing with corporate fraud and its legal implications.', date: '2023-05-22' },
  ];

  return (
    <div>
     <h1 className="text-3xl font-bold mb-4">Precedents Used</h1>
      <p>Here you can view the precedents that have been used in previous cases.</p>
      
      {/* Table displaying precedents */}
      <table className="min-w-full bg-white border border-gray-300 mt-4">
        <thead>
          <tr className="w-full bg-gray-100 text-gray-600">
            <th className="py-2 px-4 border-b">Case Number</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {precedentsData.map((precedent, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{precedent.caseNumber}</td>
              <td className="py-2 px-4 border-b">{precedent.description}</td>
              <td className="py-2 px-4 border-b">{precedent.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Precedents;
