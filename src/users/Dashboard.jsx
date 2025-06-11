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
import { useNavigate } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ onLogout, onRequestPickup }) => {
  const [wasteData, setWasteData] = useState({
    totalPickups: 54.56,
    exportedValue: 24.4,
    surplusValue: 43.82,
    scheduledVsPickups: { collected: 54, leftover: 46 },
    marketRequirements: [
      { name: 'John Smith', material: 'Electronics', location: 'London', weight: 10 },
      { name: 'Harry Brown', material: 'Metal', location: 'Manchester', weight: 50 },
      { name: 'Paul Davies', material: 'Plastic', location: 'Birmingham', weight: 20 },
    ],
    wasteComposition: { plastic: 18, paper: 19, metal: 10, glass: 6, food: 22, wood: 10, others: 15 },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setWasteData({
        totalPickups: 54.56,
        exportedValue: 24.4,
        surplusValue: 43.82,
        scheduledVsPickups: { collected: 54, leftover: 46 },
        marketRequirements: [
          { name: 'John Smith', material: 'Electronics', location: 'London', weight: 10 },
          { name: 'Harry Brown', material: 'Metal', location: 'Manchester', weight: 50 },
          { name: 'Paul Davies', material: 'Plastic', location: 'Birmingham', weight: 20 },
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
    plugins: { legend: { position: 'top', labels: { font: { size: 8 } } }, title: { display: true, text: 'Scheduled vs Pickups', font: { size: 10 } } },
    scales: { y: { beginAtZero: true, ticks: { font: { size: 8 } } } },
    maintainAspectRatio: false,
    height: 100,
  };

  const pieData = {
    labels: ['Plastic', 'Paper', 'Metal', 'Glass', 'Food', 'Wood', 'Others'],
    datasets: [{ data: [wasteData.wasteComposition.plastic, wasteData.wasteComposition.paper, wasteData.wasteComposition.metal, wasteData.wasteComposition.glass, wasteData.wasteComposition.food, wasteData.wasteComposition.wood, wasteData.wasteComposition.others], backgroundColor: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'] }],
  };

  const pieOptions = {
    responsive: true,
    plugins: { legend: { position: 'top', labels: { font: { size: 8 } } }, title: { display: true, text: 'Waste Composition', font: { size: 10 } } },
    maintainAspectRatio: false,
    height: 100,
  };

  const handleRequestPickup = () => {
    setIsModalOpen(true);
  };

  const handleUserSelect = (role) => {
    if (selectedUser && onRequestPickup) {
      onRequestPickup(role);
      setIsModalOpen(false);
    }
  };

  return (
    <main className="p-1 sm:p-2 sm:ml-64 bg-gray-900 text-white flex-1 overflow-hidden h-full">
      <div className="bg-gray-800 rounded-xl p-1 sm:p-2 shadow-lg h-full overflow-hidden">
        <h1 className="text-lg sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2">Smart Waste Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2 mb-1 sm:mb-2">
          <div className="bg-gray-700 p-1 sm:p-2 rounded-lg text-center">
            <h3 className="text-xs sm:text-base font-semibold text-gray-300">Total Pickups in June</h3>
            <p className="text-sm sm:text-xl font-bold">{wasteData.totalPickups} Tons</p>
          </div>
          <div className="bg-gray-700 p-1 sm:p-2 rounded-lg text-center">
            <h3 className="text-xs sm:text-base font-semibold text-gray-300">Exported Value</h3>
            <p className="text-sm sm:text-xl font-bold">${wasteData.exportedValue}Mn</p>
          </div>
          <div className="bg-gray-700 p-1 sm:p-2 rounded-lg text-center">
            <h3 className="text-xs sm:text-base font-semibold text-gray-300">Surplus Value</h3>
            <p className="text-sm sm:text-xl font-bold">${wasteData.surplusValue}Mn</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-2 mb-1 sm:mb-2">
          <div className="bg-gray-700 p-1 sm:p-2 rounded-lg h-20 sm:h-32">
            <Bar data={barData} options={barOptions} />
          </div>
          <div className="bg-gray-700 p-1 sm:p-2 rounded-lg">
            <h3 className="text-xs sm:text-base font-semibold text-gray-300 mb-1 sm:mb-1">Market Place Requirements</h3>
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="pb-1 sm:pb-1 text-left">Name</th>
                  <th className="pb-1 sm:pb-1 text-left">Material</th>
                  <th className="pb-1 sm:pb-1 text-left">Location</th>
                  <th className="pb-1 sm:pb-1 text-left">Weight</th>
                </tr>
              </thead>
              <tbody>
                {wasteData.marketRequirements.map((item, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="py-1 sm:py-1">{item.name}</td>
                    <td className="py-1 sm:py-1">{item.material}</td>
                    <td className="py-1 sm:py-1">{item.location}</td>
                    <td className="py-1 sm:py-1">{item.weight} Tons</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-gray-700 p-1 sm:p-2 rounded-lg h-20 sm:h-32">
          <Pie data={pieData} options={pieOptions} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-2 sm:p-4 rounded-lg shadow-lg w-11/12 sm:max-w-md">
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-green-400">Select User</h2>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full p-1 sm:p-2 mb-1 sm:mb-2 bg-gray-700 text-white rounded"
            >
              <option value="">Select a user</option>
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
            </select>
            <div className="flex justify-end space-x-1 sm:space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-1 sm:px-2 py-1 sm:py-1 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUserSelect('user')}
                className="bg-blue-500 text-white px-1 sm:px-2 py-1 sm:py-1 rounded hover:bg-blue-600"
                disabled={!selectedUser}
              >
                Proceed to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

Dashboard.defaultProps = {
  onLogout: () => {},
  onRequestPickup: () => {},
};

export default Dashboard;