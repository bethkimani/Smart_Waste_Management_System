import React from 'react';

const UserDashboard = ({ loggedInRole, onLogout, onRequestPickup }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">SmartTrash</h2>
        <ul>
          <li className="mb-2"><a href="/users/dashboard" className="hover:text-yellow-300">Dashboard</a></li>
          <li className="mb-2"><a href="/users/my-requests" className="hover:text-yellow-300">My Requests</a></li>
          <li className="mb-2"><a href="/users/profile" className="hover:text-yellow-300">Profile</a></li>
          <li className="mb-2"><a href="#" onClick={onLogout} className="hover:text-yellow-300">Logout</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
          <p className="text-lg">Welcome! View your requests and manage your waste pickup schedule.</p>
          <div className="mt-6">
            <button
              onClick={onRequestPickup}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Request Pickup
            </button>
            <a href="/users/my-requests" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4">
              My Requests
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;