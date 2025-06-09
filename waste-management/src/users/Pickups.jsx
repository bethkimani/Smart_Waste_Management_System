import React from 'react';

const Pickups = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Pickups</h2>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <p>Manage scheduled pickups and track status.</p>
        {/* Add pickup management logic here */}
      </div>
    </div>
  );
};

export default Pickups;