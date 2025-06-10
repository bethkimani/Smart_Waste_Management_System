import React from 'react';

const DriverDashboard = () => {
  return (
    <div className="bg-white rounded-3xl p-8">
      <h1 className="text-3xl font-bold mb-4">Driver Dashboard</h1>
      <p className="text-lg">View and manage your assigned pickup requests. Current time: 07:50 PM EAT, Monday, June 09, 2025.</p>
      <div className="mt-6">
        <a href="/drivers/register-truck" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Register Truck
        </a>
      </div>
    </div>
  );
};

export default DriverDashboard;