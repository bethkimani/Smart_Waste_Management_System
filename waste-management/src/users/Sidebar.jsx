import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const startWasteCollection = () => {
    navigate('/users/waste-collection-process/step/1');
  };

  return (
    <aside className="w-64 bg-green-900 p-6">
      <h2 className="text-2xl font-bold mb-6 text-green-400">Smart Trash</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/users/dashboard" className="hover:text-green-300">
            Dashboard
          </Link>
        </li>
        <li>
          <button
            onClick={startWasteCollection}
            className="w-full text-left hover:text-green-300"
          >
            Waste Collection Process
          </button>
        </li>
        <li><Link to="/users/report-waste" className="hover:text-green-300">Report Waste</Link></li>
        <li><Link to="/users/collect-waste" className="hover:text-green-300">Collect Waste</Link></li>
        <li><Link to="/users/rewards" className="hover:text-green-300">Rewards</Link></li>
        <li><Link to="/users/leaderboard" className="hover:text-green-300">Leaderboard</Link></li>
        <li><Link to="/users/route-reviews" className="hover:text-green-300">Route Reviews</Link></li>
        <li><Link to="/users/pickups" className="hover:text-green-300">Pickups</Link></li>
        <li><Link to="/users/trucks" className="hover:text-green-300">Trucks</Link></li>
        <li><Link to="/users/route-history" className="hover:text-green-300">Route History</Link></li>
        <li><Link to="/users/violations" className="hover:text-green-300">Violations</Link></li>
        <li><Link to="/users/campaigns" className="hover:text-green-300">Campaigns</Link></li>
        <li><a href="#" onClick={onLogout} className="hover:text-green-300">Logout</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;