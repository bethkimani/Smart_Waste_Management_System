import React from 'react';

const DriverDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-red-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">SmartTrash Driver</h2>
        <ul>
          <li className="mb-2"><a href="/drivers/dashboard" className="hover:text-yellow-300">Dashboard</a></li>
          <li className="mb-2"><a href="/drivers/my-pickups" className="hover:text-yellow-300">My Pickups</a></li>
          <li className="mb-2"><a href="/drivers/profile" className="hover:text-yellow-300">Profile</a></li>
          <li className="mb-2"><a href="/logout" className="hover:text-yellow-300">Logout</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4">Driver Dashboard</h1>
          <p className="text-lg">View and manage your assigned pickup requests. Current time: 12:19 PM EAT, Monday, June 09, 2025.</p>
          <div className="mt-6">
            <a href="/drivers/my-pickups" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              My Pickups
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DriverDashboard;