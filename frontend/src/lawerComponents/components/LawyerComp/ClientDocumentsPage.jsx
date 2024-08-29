import React, { useState } from "react";
import DocumentDetailModal from "./DocumentDetailModal"; // Ensure this import is correct
import { FaSearch } from "react-icons/fa";

const ClientDocuments = () => {
  // Expanded sample client data
  const [clients] = useState([
    { id: 1, name: "John Doe", caseNumber: "12345" },
    { id: 2, name: "Jane Smith", caseNumber: "67890" },
    { id: 3, name: "Alice Johnson", caseNumber: "24680" },
    { id: 4, name: "Robert Brown", caseNumber: "13579" },
    { id: 5, name: "Emily Davis", caseNumber: "24681" },
    { id: 6, name: "Michael White", caseNumber: "11111" },
    { id: 7, name: "Sarah Clark", caseNumber: "22222" },
    { id: 8, name: "David Martinez", caseNumber: "33333" },
    { id: 9, name: "Laura Wilson", caseNumber: "44444" },
    { id: 10, name: "Chris Taylor", caseNumber: "55555" },
  ]);

  // State for search term and filtered clients
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState(clients);

  // State for modal visibility and selected client
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle search input change
  const handleSearchChange = (event) => {
    const term = event.target.value.toUpperCase();
    setSearchTerm(term);
    setFilteredClients(
      clients.filter(
        (client) =>
          client.name.toUpperCase().includes(term) ||
          client.caseNumber.includes(term)
      )
    );
  };

  // Handle view documents button click
  const handleViewDocuments = (client) => {
    setSelectedClient(client);
    setIsModalVisible(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedClient(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-0">
      {" "}
      {/* Center alignment removed */}
      {/* Heading Section */}
      <div className="text-left mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Client Documents</h1>
        <p className="text-lg text-gray-600 mt-2">
          Search for clients and view their documents.
        </p>
      </div>
      {/* Search Input and Button */}
      <div className="flex items-center mb-6 space-x-4">
        <input
          type="text"
          placeholder="Search by Client Name or Case Number"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-80 lg:w-96"
        />
        <button
          onClick={() => handleSearchChange({ target: { value: searchTerm } })} // Trigger search on button click
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <FaSearch className="w-5 h-5 mr-2" />
          <span className="font-semibold">Search</span>
        </button>
      </div>
      {/* Client List */}
      <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        <ul className="space-y-4">
          {filteredClients.map((client) => (
            <li
              key={client.id}
              className="flex items-center justify-between p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col text-left">
                <div className="font-bold text-xl text-gray-900">
                  {client.name}
                </div>
                <div className="text-gray-700 mb-2">
                  Case Number: {client.caseNumber}
                </div>
              </div>
              <button
                onClick={() => handleViewDocuments(client)}
                className="bg-primary text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700"
              >
                View Documents
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Document Detail Modal */}
      {isModalVisible && (
        <DocumentDetailModal
          client={selectedClient}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ClientDocuments;
