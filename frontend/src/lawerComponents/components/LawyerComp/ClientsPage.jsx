import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useStore from '../../../userStore';

const Clients = () => {

  const { clients, setClients } = useStore();


  useEffect(() => {
    const fetchClients = async () => {
      const lawyerId = localStorage.getItem('lawyerId');

      if (!lawyerId) {
        console.error('Lawyer ID not found');
        return; // Exit if no lawyer ID
      }

      try {
        // Fetch client IDs
        const response = await axios.post('http://localhost:3000/lawyer/cases', { lawyerId }, {
          withCredentials: true
        });
/* console.log(response)
 *//* console.log(response.data.data)
 */        if (response.data.status && response.data.data) {
          const clientIds = response.data.data;
          console.log(clientIds)

          // Fetch detailed information for each client
          const clientDetailsPromises = clientIds.map(id => 
            axios.post(`http://localhost:3000/prisoner/getPrisonerDetailsByName`,{_id: "66c9913f6cdba09d94e14405" }, { withCredentials: true })
          
          );
          const triL = clientIds.map(id => 
            console.log(`${id}` )
            
          );
          console.log("cle")

          // Wait for all requests to complete
          const clientDetailsResponses = await Promise.all(clientDetailsPromises);

          // Extract data from responses
          const clientsData = clientDetailsResponses.map(res => res.data);

          setClients(clientsData)

        } else {
          console.error('Error fetching client IDs:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, [setClients]);

  console.log(clients)


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Clients</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Client Name</th>
              <th className="py-2">Case</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="border px-4 py-2">{client.data.name}</td>
                <td className="border px-4 py-2">{client.data.case_id}</td>
                <td className={`border px-4 py-2 ${client.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                  {client.status}
                </td>
              </tr>
            ))}
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients;
