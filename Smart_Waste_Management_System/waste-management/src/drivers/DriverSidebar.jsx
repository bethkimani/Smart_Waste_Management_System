import React from 'react';
import { Link } from 'react-router-dom';

const DriverSidebar = () => {
  return (
    <aside className="w-64 bg-red-800 text-white p-4 h-screen fixed">
      <h2 className="text-2xl font-bold mb-4">SmartTrash Driver</h2>
      <ul className="space-y-4">
        <li><Link to="/drivers/dashboard" className="flex items-center hover:text-yellow-300"><span className="mr-2">🏠</span> Dashboard</Link></li>
        <li><Link to="/drivers/register-truck" className="flex items-center hover:text-yellow-300"><span className="mr-2">🚛</span> Register Truck</Link></li>
        <li><Link to="/drivers/route-review" className="flex items-center hover:text-yellow-300"><span className="mr-2">🗺️</span> Route Review</Link></li>
        <li><Link to="/drivers/collect-waste" className="flex items-center hover:text-yellow-300"><span className="mr-2">🗑️</span> Collect Waste</Link></li>
        <li><Link to="/drivers/trip-history" className="flex items-center hover:text-yellow-300"><span className="mr-2">📅</span> Trip History</Link></li>
        <li><Link to="/logout" className="flex items-center hover:text-yellow-300"><span className="mr-2">🚪</span> Logout</Link></li>
      </ul>
    </aside>
  );
};

export default DriverSidebar;