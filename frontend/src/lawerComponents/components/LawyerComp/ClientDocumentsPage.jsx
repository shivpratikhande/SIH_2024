import React, { useState } from 'react';
import DocumentDetailModal from './DocumentDetailModal'; // Ensure this import is correct

const ClientDocuments = () => {
  // Sample client data
  const [clients] = useState([
    { id: 1, name: 'John Doe', caseNumber: '12345' },
    { id: 2, name: 'Jane Smith', caseNumber: '67890' },
  ]);

  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewDocuments = (client) => {
    setSelectedClient(client);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedClient(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Client Documents</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <ul>
          {clients.map((client) => (
            <li key={client.id} className="mb-4 p-4 bg-gray-100 rounded">
              <div className="font-bold text-lg">{client.name}</div>
              <div>Case Number: {client.caseNumber}</div>
              <button
                onClick={() => handleViewDocuments(client)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
              >
                View Documents
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isModalVisible && (
        <DocumentDetailModal client={selectedClient} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ClientDocuments;
