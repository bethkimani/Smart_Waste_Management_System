import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">SmartTrash Admin</h2>
        <ul>
          <li className="mb-2"><a href="/admins/dashboard" className="hover:text-yellow-300">Dashboard</a></li>
          <li className="mb-2"><a href="/admins/manage-users" className="hover:text-yellow-300">Manage Users</a></li>
          <li className="mb-2"><a href="/admins/manage-drivers" className="hover:text-yellow-300">Manage Drivers</a></li>
          <li className="mb-2"><a href="/admins/profile" className="hover:text-yellow-300">Profile</a></li>
          <li className="mb-2"><a href="/logout" className="hover:text-yellow-300">Logout</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
          <p className="text-lg">Manage users, drivers, and system-wide requests.</p>
          <div className="mt-6">
            <a href="/admins/manage-users" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Manage Users
            </a>
            <a href="/admins/manage-drivers" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4">
              Manage Drivers
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;