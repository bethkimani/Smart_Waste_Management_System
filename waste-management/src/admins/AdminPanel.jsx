import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaList, FaUsers, FaUserShield, FaDollarSign } from 'react-icons/fa';

const AdminPanel = () => {
  const [teamStats, setTeamStats] = useState({ users: 0, admins: 0, drivers: 0 });
  const [requests, setRequests] = useState([]);
  const [payments, setPayments] = useState([]);
  const navigate = useNavigate();

  // Mock data for team stats and requests (replace with API calls later)
  useEffect(() => {
    // Simulate team login counts
    setTeamStats({
      users: 15,
      admins: 3,
      drivers: 10,
    });

    // Simulate requests with status
    setRequests([
      { id: 1, address: '195 Ashby Road, Hinckley LE10 1SH', status: 'pending', date: '2025-06-09' },
      { id: 2, address: '123 Main St, Nairobi', status: 'approved', date: '2025-06-08' },
      { id: 3, address: '456 Hill Rd, Kenya', status: 'rejected', date: '2025-06-07' },
    ]);

    // Simulate payment data from StepSix
    setPayments([
      {
        id: 1,
        address: '195 Ashby Road, Hinckley LE10 1SH',
        deliveryDate: '2025-06-20',
        collectionDate: '2025-06-26',
        skipSize: 5,
        hirePeriod: '14 days',
        price: 241.00,
        vat: 48.20,
        total: 289.20,
        paymentMethod: 'card',
        date: '2025-06-09',
      },
    ]);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-4 space-y-6">
        <h2 className="text-2xl font-bold mb-6">SmartTrash Admin</h2>
        <ul className="space-y-4">
          <li>
            <a href="#dashboard" onClick={() => navigate('/admins/dashboard')} className="flex items-center hover:text-yellow-300">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#all-requests" onClick={() => navigate('/admins/all-requests')} className="flex items-center hover:text-yellow-300">
              <FaList className="mr-2" /> All Requests
            </a>
          </li>
          <li>
            <a href="#all-drivers" onClick={() => navigate('/admins/all-drivers')} className="flex items-center hover:text-yellow-300">
              <FaUsers className="mr-2" /> All Drivers
            </a>
          </li>
          <li>
            <a href="#teams" onClick={() => navigate('/admins/teams')} className="flex items-center hover:text-yellow-300">
              <FaUserShield className="mr-2" /> Teams
            </a>
          </li>
          <li>
            <a href="#payments" onClick={() => navigate('/admins/payments')} className="flex items-center hover:text-yellow-300">
              <FaDollarSign className="mr-2" /> Payments
            </a>
          </li>
          <li>
            <a href="/logout" className="flex items-center hover:text-yellow-300">
              <FaUserShield className="mr-2" /> Logout
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="bg-white rounded-3xl p-6">
          {/* Team Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Team Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Users</h3>
                <p className="text-2xl">{teamStats.users}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Admins</h3>
                <p className="text-2xl">{teamStats.admins}</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold">Drivers</h3>
                <p className="text-2xl">{teamStats.drivers}</p>
              </div>
            </div>
          </section>

          {/* All Requests Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">All Requests</h2>
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
          </section>

          {/* Payment Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Payment Checkup</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-2">ID</th>
                    <th className="p-2">Address</th>
                    <th className="p-2">Delivery Date</th>
                    <th className="p-2">Collection Date</th>
                    <th className="p-2">Skip Size</th>
                    <th className="p-2">Total (£)</th>
                    <th className="p-2">Method</th>
                    <th className="p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map(pay => (
                    <tr key={pay.id} className="border-b">
                      <td className="p-2">{pay.id}</td>
                      <td className="p-2">{pay.address}</td>
                      <td className="p-2">{new Date(pay.deliveryDate).toLocaleDateString('en-GB')}</td>
                      <td className="p-2">{new Date(pay.collectionDate).toLocaleDateString('en-GB')}</td>
                      <td className="p-2">{pay.skipSize} Yard</td>
                      <td className="p-2">£{pay.total.toFixed(2)}</td>
                      <td className="p-2">{pay.paymentMethod}</td>
                      <td className="p-2">{new Date(pay.date).toLocaleDateString('en-GB')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;