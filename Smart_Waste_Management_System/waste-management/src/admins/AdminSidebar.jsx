import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaClipboardList, FaTruck, FaMoneyBillWave, FaSignOutAlt } from 'react-icons/fa'; // Install react-icons if needed

const AdminSidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/admins/${path}`);
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <button onClick={() => handleNavigation('teams')} className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center">
            <FaUsers className="mr-2" /> Teams
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('all-requests')} className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center">
            <FaClipboardList className="mr-2" /> All Requests
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('all-drivers')} className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center">
            <FaTruck className="mr-2" /> All Drivers
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('payments')} className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center">
            <FaMoneyBillWave className="mr-2" /> Payments
          </button>
        </li>
        <li>
          <button onClick={onLogout} className="w-full text-left p-2 hover:bg-gray-700 rounded flex items-center text-red-400">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;