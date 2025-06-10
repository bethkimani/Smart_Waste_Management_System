import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';

const AllDrivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    setDrivers([
      { id: 1, name: 'John Doe', status: 'Active', location: 'Nairobi' },
      { id: 2, name: 'Jane Smith', status: 'Inactive', location: 'Hinckley' },
    ]);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4">All Drivers</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Location</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map(driver => (
                  <tr key={driver.id} className="border-b">
                    <td className="p-2">{driver.id}</td>
                    <td className="p-2">{driver.name}</td>
                    <td className="p-2">{driver.status}</td>
                    <td className="p-2">{driver.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllDrivers;