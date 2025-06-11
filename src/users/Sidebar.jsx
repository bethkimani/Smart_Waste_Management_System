import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaTrash, FaFileAlt, FaMap, FaHistory, FaGift, FaTrophy, FaFileInvoiceDollar, FaComments, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const startRaiseRequest = () => {
    navigate('/users/raise-request/step/1');
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="sm:hidden p-2 bg-green-900 text-white fixed top-0 left-0 z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <aside
        className={`w-64 bg-green-900 p-2 sm:p-4 flex flex-col h-screen fixed sm:static z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-green-400">Smart Trash</h2>
        <ul className="space-y-1 sm:space-y-2 flex-1 overflow-y-auto sm:overflow-y-hidden text-xs sm:text-sm">
          <li>
            <Link to="/users/dashboard" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaTachometerAlt /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/users/report-waste" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaTrash /> <span>Report Waste</span>
            </Link>
          </li>
          <li>
            <button onClick={startRaiseRequest} className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300 w-full text-left">
              <FaFileAlt /> <span>Raise Request</span>
            </button>
          </li>
          <li>
            <Link to="/users/tracking-process" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaMap /> <span>Tracking Process</span>
            </Link>
          </li>
          <li>
            <Link to="/users/report-history" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaHistory /> <span>Report History</span>
            </Link>
          </li>
          <li>
            <Link to="/users/rewards" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaGift /> <span>Rewards</span>
            </Link>
          </li>
          <li>
            <Link to="/users/leaderboard" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaTrophy /> <span>Leaderboard</span>
            </Link>
          </li>
          <li>
            <Link to="/users/violation-billing" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaFileInvoiceDollar /> <span>Violation Billing</span>
            </Link>
          </li>
          <li>
            <Link to="/users/waste-chat" className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300" onClick={() => setIsOpen(false)}>
              <FaComments /> <span>WasteChat</span>
            </Link>
          </li>
          <li>
            <button onClick={() => { onLogout(); setIsOpen(false); }} className="flex items-center space-x-1 sm:space-x-2 hover:text-green-300">
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 sm:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;