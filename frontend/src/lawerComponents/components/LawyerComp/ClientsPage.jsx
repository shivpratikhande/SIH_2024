import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Clients = () => {
  // Sample data for clients
  const clientsData = [
    { id: 1, clientName: 'John Doe', caseId: 'Case #12345', caseDescription: 'Contract dispute', status: 'Active', email: 'john.doe@example.com', phone: '+1234567890', address: '123 Elm Street, Springfield' },
    { id: 2, clientName: 'Jane Smith', caseId: 'Case #67890', caseDescription: 'Personal injury', status: 'Closed', email: 'jane.smith@example.com', phone: '+0987654321', address: '456 Oak Avenue, Springfield' },
    { id: 3, clientName: 'Alice Johnson', caseId: 'Case #24680', caseDescription: 'Divorce settlement', status: 'Active', email: 'alice.johnson@example.com', phone: '+1122334455', address: '789 Maple Lane, Springfield' },
    { id: 4, clientName: 'Robert Brown', caseId: 'Case #13579', caseDescription: 'Property dispute', status: 'Active', email: 'robert.brown@example.com', phone: '+2233445566', address: '321 Pine Street, Springfield' },
    { id: 5, clientName: 'Emily Davis', caseId: 'Case #24681', caseDescription: 'Business litigation', status: 'Pending', email: 'emily.davis@example.com', phone: '+3344556677', address: '654 Cedar Road, Springfield' },
  ];

  // State for search input and filtered clients
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState(clientsData);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    setFilteredClients(
      clientsData.filter(client =>
        client.caseId.toUpperCase().includes(searchTerm.toUpperCase()) ||
        client.clientName.toUpperCase().includes(searchTerm.toUpperCase())
      )
    );
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Heading Section */}
      <div className="text-left mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Clients</h1>
        <p className="text-lg text-gray-600">Search for clients and view their case details.</p>
      </div>

      {/* Search Input and Button */}
      <div className="flex mb-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by Case ID or Client Name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-lg p-3 w-full md:w-80 lg:w-96"
          />
          <button
            onClick={handleSearchClick} // Trigger search on button click
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <FaSearch className="w-5 h-5 mr-2" />
            <span className="font-semibold">Search</span>
          </button>
        </div>
      </div>

      {/* Client Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredClients.map(client => (
          <div key={client.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-left">{client.clientName}</h2>
            <p className="text-gray-700 mb-1 text-left"><span className="font-medium">Case ID:</span> {client.caseId}</p>
            <p className="text-gray-700 mb-1 text-left"><span className="font-medium">Case Description:</span> {client.caseDescription}</p>
            <p className={`text-sm mb-2 text-left ${client.status === 'Active' ? 'text-green-500' : client.status === 'Closed' ? 'text-red-500' : 'text-yellow-500'}`}>
              <span className="font-medium">Status:</span> {client.status}
            </p>
            <p className="text-gray-600 mb-1 text-left"><span className="font-medium">Email:</span> {client.email}</p>
            <p className="text-gray-600 mb-1 text-left"><span className="font-medium">Phone:</span> {client.phone}</p>
            <p className="text-gray-600 text-left"><span className="font-medium">Address:</span> {client.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
