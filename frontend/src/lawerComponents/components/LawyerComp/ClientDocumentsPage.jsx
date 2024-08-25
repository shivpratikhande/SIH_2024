import React from 'react';

const ClientDocuments = () => {
  const documents = [
    { id: 1, name: 'Contract Agreement', date: 'Aug 20, 2024', status: 'Reviewed' },
    { id: 2, name: 'Witness Statement', date: 'Aug 22, 2024', status: 'Pending' },
    { id: 3, name: 'Evidence Report', date: 'Aug 24, 2024', status: 'Approved' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Client Documents</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <ul>
          {documents.map((doc) => (
            <li key={doc.id} className="mb-2 p-2 bg-gray-100 rounded">
              <div className="font-bold">{doc.name}</div>
              <div>Date: {doc.date}</div>
              <div>Status: <span className={doc.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}>{doc.status}</span></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientDocuments;
