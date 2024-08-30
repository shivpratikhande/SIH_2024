import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const Clients = () => {
  // State for clients and search functionality
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);

  // Fetch clients data from the server
  useEffect(() => {
    const fetchClients = async () => {
      const lawyerId = localStorage.getItem('lawyerId');
  
      if (!lawyerId) {
        console.error('Lawyer ID not found');
        return; // Exit if no lawyer ID
      }
  
      try {
        // Fetch client data
        const response = await axios.post('http://localhost:3000/lawyer/cases', { lawyerId }, {
          withCredentials: true
        });
  
        // Check response status code
        if (response.data.status_code === 200 && Array.isArray(response.data.data)) {
          setClients(response.data.data); // Use response.data.data which is an array
          setFilteredClients(response.data.data); // Set filteredClients as well
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
  
    fetchClients();
  }, []);
  

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    setFilteredClients(
      clients.filter(client =>
        client.data.case_id.toUpperCase().includes(searchTerm.toUpperCase()) ||
        client.data.name.toUpperCase().includes(searchTerm.toUpperCase())
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
            <h2 className="text-xl font-semibold mb-2 text-left">{client.data.name}</h2>
            <p className="text-gray-700 mb-1 text-left"><span className="font-medium">Case ID:</span> {client.data.case_id}</p>
            <p className="text-gray-700 mb-1 text-left"><span className="font-medium">Case Description:</span> {client.data.caseDescription}</p>
            <p className={`text-sm mb-2 text-left ${client.data.status === 'Active' ? 'text-green-500' : client.data.status === 'Closed' ? 'text-red-500' : 'text-yellow-500'}`}>
              <span className="font-medium">Status:</span> {client.data.status}
            </p>
            <p className="text-gray-600 mb-1 text-left"><span className="font-medium">Email:</span> {client.data.email_id}</p>
            <p className="text-gray-600 mb-1 text-left"><span className="font-medium">Phone:</span> {client.data.phone}</p>
            <p className="text-gray-600 text-left"><span className="font-medium">Address:</span> {client.data.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
