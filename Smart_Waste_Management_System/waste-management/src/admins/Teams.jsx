import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';

const Teams = () => {
  const [teamStats, setTeamStats] = useState({ users: 0, admins: 0, drivers: 0 });

  useEffect(() => {
    setTeamStats({
      users: 15,
      admins: 3,
      drivers: 10,
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4">Teams</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold">Users</h3>
              <p className="text-2xl">{teamStats.users}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold">Admins</h3>
              <p className="text-2xl">{teamStats.admins}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold">Drivers</h3>
              <p className="text-2xl">{teamStats.drivers}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Teams;