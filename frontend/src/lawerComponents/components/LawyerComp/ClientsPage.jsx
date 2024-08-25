import React from 'react';

const Clients = () => {
  const clients = [
    { id: 1, name: 'John Doe', case: 'Case #12345', status: 'Active' },
    { id: 2, name: 'Jane Smith', case: 'Case #67890', status: 'Closed' },
    { id: 3, name: 'Alice Johnson', case: 'Case #24680', status: 'Active' },
  ];

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
                <td className="border px-4 py-2">{client.name}</td>
                <td className="border px-4 py-2">{client.case}</td>
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
