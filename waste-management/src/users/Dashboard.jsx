import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ loggedInRole, onLogout, onRequestPickup }) => {
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

  const barData = {
    labels: ['2 Jun', '4 Jun', '6 Jun', '8 Jun', '10 Jun', '12 Jun'],
    datasets: [
      { label: 'Collected', data: [54, 50, 52, 55, 53, 54], backgroundColor: '#10B981' },
      { label: 'Leftover', data: [46, 50, 48, 45, 47, 46], backgroundColor: '#F97316' },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Scheduled vs Pickups' } },
    scales: { y: { beginAtZero: true } },
  };

  const pieData = {
    labels: ['Plastic', 'Paper', 'Metal', 'Glass', 'Food', 'Wood', 'Others'],
    datasets: [{ data: [wasteData.wasteComposition.plastic, wasteData.wasteComposition.paper, wasteData.wasteComposition.metal, wasteData.wasteComposition.glass, wasteData.wasteComposition.food, wasteData.wasteComposition.wood, wasteData.wasteComposition.others], backgroundColor: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'] }],
  };

  const pieOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Waste Composition' } },
  };

  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-green-400">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Total Pickups in June</h3>
            <p className="text-2xl">{wasteData.totalPickups} Tons</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Exported</h3>
            <p className="text-2xl">${wasteData.exportedValue}Mn</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Surplus</h3>
            <p className="text-2xl">${wasteData.surplusValue}Mn</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg col-span-2">
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="bg-gray-700 p-4 rounded-lg col-span-1">
            <h3 className="text-lg font-semibold">Market Place Requirements</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Material</th>
                  <th>Location</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                {wasteData.marketRequirements.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.material}</td>
                    <td>{item.location}</td>
                    <td>{item.weight} Tons</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg col-span-2">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </main>
  );
};

Dashboard.defaultProps = {
  loggedInRole: null,
  onLogout: () => {},
  onRequestPickup: () => {},
};

export default Dashboard;