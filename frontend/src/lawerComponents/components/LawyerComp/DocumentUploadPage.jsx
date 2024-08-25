import React from "react";

const DocumentUpload = () => {
  const uploadedDocuments = [
    { id: 1, name: "Contract Agreement", date: "Aug 20, 2024" },
    { id: 2, name: "Witness Statement", date: "Aug 22, 2024" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Document Upload</h1>
      <div className="bg-white shadow p-4 rounded-lg mb-6">
        <input type="file" className="mt-4 mb-4" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Uploaded Documents</h2>
      <ul>
        {uploadedDocuments.map((doc) => (
          <li key={doc.id} className="mb-2 p-2 bg-gray-100 rounded">
            <div className="font-bold">{doc.name}</div>
            <div>Uploaded on: {doc.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentUpload;
