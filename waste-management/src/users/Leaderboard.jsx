import React from 'react';

const Leaderboard = () => {
  const leaderboardData = [
    { name: 'User1', points: 150 },
    { name: 'User2', points: 120 },
    { name: 'User3', points: 90 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Leaderboard</h2>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <ul className="space-y-2">
          {leaderboardData.map((user, index) => (
            <li key={index} className="flex justify-between">
              <span>{user.name}</span>
              <span>{user.points} points</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;