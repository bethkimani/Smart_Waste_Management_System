import React, { useState } from 'react';

const Rewards = () => {
  const [rewardPoints, setRewardPoints] = useState(66); // Initial points

  const handleRedeem = () => {
    if (rewardPoints < 10) return alert('Not enough points to redeem!');
    setRewardPoints(prev => prev - 10);
    alert('10 points redeemed!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Rewards</h2>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Reward Balance</h3>
          <p className="text-green-600 text-2xl">{rewardPoints} Available Points</p>
        </div>
        <div className="mb-4">
          <h3>Recent Transactions</h3>
          <p>Points earned for collecting waste: +56 (2024-09-11)</p>
          <p>Points earned for reporting waste: +10 (2024-09-11)</p>
          <p>Redeemed all points: -10 (2024-09-05)</p>
        </div>
        <div>
          <h3>Available Rewards</h3>
          <p>Your Points: {rewardPoints} points</p>
          <button onClick={handleRedeem} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2">Redeem All Points</button>
          <p className="mt-2">Default Reward: 10 points</p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;