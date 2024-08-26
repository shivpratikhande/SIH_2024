import React from 'react';

const DocumentReviewPage = () => {
  const dummyDocuments = [
    { id: 1, title: "Evidence for Case 001", status: "Reviewed" },
    { id: 2, title: "Witness Statement for Case 002", status: "Pending" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Document Review</h2>
      <ul>
        {dummyDocuments.map((document) => (
          <li key={document.id} className="p-4 bg-white shadow mb-2">
            <h3 className="font-semibold">{document.title}</h3>
            <p>Status: {document.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentReviewPage;
