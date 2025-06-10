import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepThree = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const navigate = useNavigate();
  const skips = [
    { size: 4, price: 227, hirePeriod: '7 days' },
    { size: 6, price: 300, hirePeriod: '14 days' },
    { size: 8, price: 325, hirePeriod: '7 days' },
    { size: 10, price: 350, hirePeriod: '7 days' },
    { size: 12, price: 375, hirePeriod: '14 days' },
    { size: 14, price: 400, hirePeriod: '14 days' },
  ];

  const handleNext = () => {
    if (selectedSkip) navigate('/users/raise-request/step/4');
  };

  const handleBack = () => {
    navigate('/users/raise-request/step/2');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <nav className="bg-green-900 p-4 flex justify-between mb-4 flex-wrap">
        <div className="flex space-x-4 text-white flex-wrap">
          <span>Postcode</span>
          <span>Waste Type</span>
          <span className="text-blue-400">Choose Skip Size</span>
          <span>Permit Check</span>
          <span>Schedule Collection</span>
          <span>Payment Information</span>
        </div>
      </nav>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Choose Your Skip Size</h2>
        <p className="mb-4">Select the skip size that best suits your needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skips.map(skip => (
            <div key={skip.size} className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold">{skip.size} Yard Skip</h3>
              <p>{skip.hirePeriod} hire period</p>
              <p className="text-green-400">£{skip.price}</p>
              <button
                onClick={() => setSelectedSkip(skip)}
                className={`mt-2 px-2 py-1 rounded ${selectedSkip?.size === skip.size ? 'bg-blue-500' : 'bg-green-500'} text-white hover:bg-${selectedSkip?.size === skip.size ? 'blue-600' : 'green-600'}`}
              >
                {selectedSkip?.size === skip.size ? 'Selected' : 'Select This Skip'}
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Back
          </button>
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={!selectedSkip}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;