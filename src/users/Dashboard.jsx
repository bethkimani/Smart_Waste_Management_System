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
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = ({ onLogout }) => {
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
    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Scheduled vs Pickups' } },
    scales: { y: { beginAtZero: true } },
    maintainAspectRatio: false,
  };

  const pieData = {
    labels: ['Plastic', 'Paper', 'Metal', 'Glass', 'Food', 'Wood', 'Others'],
    datasets: [
      {
        data: [
          wasteData.wasteComposition.plastic,
          wasteData.wasteComposition.paper,
          wasteData.wasteComposition.metal,
          wasteData.wasteComposition.glass,
          wasteData.wasteComposition.food,
          wasteData.wasteComposition.wood,
          wasteData.wasteComposition.others,
        ],
        backgroundColor: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#6B7280'],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Waste Composition' } },
    maintainAspectRatio: false,
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex-1 overflow-auto h-full"
    >
      <Card className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-green-500 dark:text-green-400">
            Smart Waste Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'Total Pickups in June', value: `${wasteData.totalPickups} Tons` },
              { title: 'Exported Value', value: `$${wasteData.exportedValue}Mn` },
              { title: 'Surplus Value', value: `$${wasteData.surplusValue}Mn` },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gray-100 dark:bg-gray-700 p-4 text-center">
                  <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300">{item.title}</h3>
                  <p className="text-xl font-bold">{item.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <Card className="bg-gray-100 dark:bg-gray-700 p-4 h-64">
              <Bar data={barData} options={barOptions} />
            </Card>
            <Card className="bg-gray-100 dark:bg-gray-700 p-4">
              <CardHeader>
                <CardTitle className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  Market Place Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Material</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Weight</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {wasteData.marketRequirements.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.material}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.weight} Tons</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-gray-100 dark:bg-gray-700 p-4 h-64">
            <Pie data={pieData} options={pieOptions} />
          </Card>
        </CardContent>
      </Card>
    </motion.main>
  );
};

Dashboard.defaultProps = {
  onLogout: () => {},
};

export default Dashboard;