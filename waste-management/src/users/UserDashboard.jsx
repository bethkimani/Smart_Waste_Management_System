import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = ({ loggedInRole, onLogout, onRequestPickup }) => {
  // Simulated data for charts (replace with API call if needed)
  const [wasteData, setWasteData] = useState({
    totalPickups: 54.56,
    exportedValue: 24.4,
    surplusValue: 43.82,
    scheduledVsPickups: { collected: 54, leftover: 46 },
    marketRequirements: [
      { name: 'John Doe', material: 'Electronics', location: 'California', weight: 10 },
      { name: 'Hassan Ibrahim', material: 'Metal', location: 'New York', weight: 50 },
      { name: 'Peter Johnson', material: 'Plastic', location: 'Oklahoma', weight: 20 },
    ],
    wasteComposition: { plastic: 18, paper: 19, metal: 10, glass: 6, food: 22, wood: 10, others: 15 },
  });

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setWasteData({
        totalPickups: 54.56,
        exportedValue: 24.4,
        surplusValue: 43.82,
        scheduledVsPickups: { collected: 54, leftover: 46 },
        marketRequirements: [
          { name: 'John Doe', material: 'Electronics', location: 'California', weight: 10 },
          { name: 'Hassan Ibrahim', material: 'Metal', location: 'New York', weight: 50 },
          { name: 'Peter Johnson', material: 'Plastic', location: 'Oklahoma', weight: 20 },
        ],
        wasteComposition: { plastic: 18, paper: 19, metal: 10, glass: 6, food: 22, wood: 10, others: 15 },
      });
    }, 1000);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-green-900 p-6">
        <h2 className="text-2xl font-bold mb-6 text-green-400">Smart Trash</h2>
        <ul className="space-y-4">
          <li><Link to="/users/dashboard" className="hover:text-green-300">Dashboard</Link></li>
          <li><Link to="/users/report-waste" className="hover:text-green-300">Report Waste</Link></li>
          <li><Link to="/users/collect-waste" className="hover:text-green-300">Collect Waste</Link></li>
          <li><Link to="/users/rewards" className="hover:text-green-300">Rewards</Link></li>
          <li><Link to="/users/leaderboard" className="hover:text-green-300">Leaderboard</Link></li>
          <li><Link to="/users/route-reviews" className="hover:text-green-300">Route Reviews</Link></li>
          <li><Link to="/users/pickups" className="hover:text-green-300">Pickups</Link></li>
          <li><Link to="/users/trucks" className="hover:text-green-300">Trucks</Link></li>
          <li><Link to="/users/route-history" className="hover:text-green-300">Route History</Link></li>
          <li><Link to="/users/violations" className="hover:text-green-300">Violations</Link></li>
          <li><Link to="/users/campaigns" className="hover:text-green-300">Campaigns</Link></li>
          <li><a href="#" onClick={onLogout} className="hover:text-green-300">Logout</a></li>
        </ul>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-green-400">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Total Pickups */}
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Total Pickups in June</h3>
              <p className="text-2xl">{wasteData.totalPickups} Tons</p>
            </div>
            {/* Exported Value */}
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Exported</h3>
              <p className="text-2xl">${wasteData.exportedValue}Mn</p>
            </div>
            {/* Surplus Value */}
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Surplus</h3>
              <p className="text-2xl">${wasteData.surplusValue}Mn</p>
            </div>
            {/* Scheduled vs Pickups Chart */}
            <div className="bg-gray-700 p-4 rounded-lg col-span-2">
              <h3 className="text-lg font-semibold">Scheduled vs Pickups</h3>
              <div className="chart">
                ```chartjs
                {
                  "type": "bar",
                  "data": {
                    "labels": ["2 Jun", "4 Jun", "6 Jun", "8 Jun", "10 Jun", "12 Jun"],
                    "datasets": [
                      {
                        "label": "Collected",
                        "data": [54, 50, 52, 55, 53, 54],
                        "backgroundColor": "#10B981"
                      },
                      {
                        "label": "Leftover",
                        "data": [46, 50, 48, 45, 47, 46],
                        "backgroundColor": "#F97316"
                      }
                    ]
                  },
                  "options": {
                    "scales": {
                      "y": {
                        "beginAtZero": true
                      }
                    }
                  }
                }