import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';

const AllRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    setRequests([
      { id: 1, address: '195 Ashby Road, Hinckley LE10 1SH', status: 'pending', date: '2025-06-09' },
      { id: 2, address: '123 Main St, Nairobi', status: 'approved', date: '2025-06-08' },
      { id: 3, address: '456 Hill Rd, Kenya', status: 'rejected', date: '2025-06-07' },
    ]);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4">All Requests</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">ID</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.map(req => (
                  <tr key={req.id} className="border-b">
                    <td className="p-2">{req.id}</td>
                    <td className="p-2">{req.address}</td>
                    <td className="p-2">{new Date(req.date).toLocaleDateString()}</td>
                    <td className="p-2">
                      <span className={`px-2 py-1 rounded ${req.status === 'approved' ? 'bg-green-200 text-green-800' : req.status === 'rejected' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="p-2">
                      <select
                        value={req.status}
                        onChange={(e) => handleStatusChange(req.id, e.target.value)}
                        className="p-1 rounded bg-gray-100"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approve</option>
                        <option value="rejected">Reject</option>
                      </select>
                    </td>
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

export default AllRequests;