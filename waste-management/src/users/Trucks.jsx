import React, { useState, useEffect } from 'react';

const Trucks = () => {
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    // Simulated API call
    setSkips([
      { size: 5, price: 241.00, hirePeriod: '14 days' },
      { size: 8, price: 300.00, hirePeriod: '14 days' },
      { size: 10, price: 350.00, hirePeriod: '14 days' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Trucks</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {skips.map(skip => (
            <li key={skip.size} className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold">{skip.size} Yard Skip</h3>
              <p>Hire Period: {skip.hirePeriod}</p>
              <p className="text-green-400">£{skip.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trucks;