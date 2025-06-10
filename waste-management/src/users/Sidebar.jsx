import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaTrash, FaFileAlt, FaMap, FaHistory, FaGift, FaTrophy, FaFileInvoiceDollar, FaComments } from 'react-icons/fa';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const startRaiseRequest = () => {
    navigate('/users/raise-request/step/1');
  };

  return (
    <aside className="w-full sm:w-64 bg-green-900 p-6 flex flex-col h-screen fixed sm:static z-20">
      <h2 className="text-2xl font-bold mb-6 text-green-400">Smart Trash</h2>
      <ul className="space-y-4 flex-1">
        <li>
          <Link to="/users/dashboard" className="flex items-center space-x-2 hover:text-green-300">
            <FaTachometerAlt /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/users/report-waste" className="flex items-center space-x-2 hover:text-green-300">
            <FaTrash /> <span>Report Waste</span>
          </Link>
        </li>
        <li>
          <button onClick={startRaiseRequest} className="flex items-center space-x-2 hover:text-green-300 w-full text-left">
            <FaFileAlt /> <span>Raise Request</span>
          </button>
        </li>
        <li>
          <Link to="/users/tracking-process" className="flex items-center space-x-2 hover:text-green-300">
            <FaMap /> <span>Tracking Process</span>
          </Link>
        </li>
        <li>
          <Link to="/users/report-history" className="flex items-center space-x-2 hover:text-green-300">
            <FaHistory /> <span>Report History</span>
          </Link>
        </li>
        <li>
          <Link to="/users/rewards" className="flex items-center space-x-2 hover:text-green-300">
            <FaGift /> <span>Rewards</span>
          </Link>
        </li>
        <li>
          <Link to="/users/leaderboard" className="flex items-center space-x-2 hover:text-green-300">
            <FaTrophy /> <span>Leaderboard</span>
          </Link>
        </li>
        <li>
          <Link to="/users/violation-billing" className="flex items-center space-x-2 hover:text-green-300">
            <FaFileInvoiceDollar /> <span>Violation Billing</span>
          </Link>
        </li>
        <li>
          <Link to="/users/waste-chat" className="flex items-center space-x-2 hover:text-green-300">
            <FaComments /> <span>WasteChat</span>
          </Link>
        </li>
        <li>
          <button onClick={onLogout} className="flex items-center space-x-2 hover:text-green-300">
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;