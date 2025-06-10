import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8 h-full flex items-center justify-center">
          <div>
            <h1 className="text-3xl font-bold mb-4 text-center">Admin Dashboard</h1>
            <p className="text-lg mb-6 text-center">Overview of system-wide activities.</p>
            <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
              <p className="text-gray-500">Placeholder for Graph or Image</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;