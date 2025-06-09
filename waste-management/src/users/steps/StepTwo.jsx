import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepTwo = () => {
  const [wasteTypes, setWasteTypes] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (wasteTypes.length > 0) navigate('/waste-collection-process/step/3');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="bg-green-900 p-4 flex justify-between mb-4">
        <div className="flex space-x-4 text-white">
          <span>Postcode</span>
          <span className="text-blue-400">Waste Type</span>
          <span>Choose Skip Size</span>
          <span>Permit Check</span>
          <span>Schedule Collection</span>
          <span>Payment Information</span>
        </div>
      </nav>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Select Waste Type</h2>
        <p className="mb-4">What type of waste are you disposing of?</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {['Construction Waste', 'Household Waste', 'Garden Waste', 'Commercial Waste'].map(type => (
            <label key={type} className="flex items-center bg-gray-700 p-2 rounded">
              <input
                type="checkbox"
                checked={wasteTypes.includes(type)}
                onChange={(e) => setWasteTypes(e.target.checked ? [...wasteTypes, type] : wasteTypes.filter(t => t !== type))}
                className="mr-2"
              />
              {type}
              {type === 'Construction Waste' && <span className="ml-2 text-gray-400">Building materials, renovation debris.</span>}
              {type === 'Household Waste' && <span className="ml-2 text-gray-400">General household items and furniture.</span>}
              {type === 'Garden Waste' && <span className="ml-2 text-gray-400">Green waste and landscaping materials.</span>}
              {type === 'Commercial Waste' && <span className="ml-2 text-gray-400">Business and office clearance.</span>}
            </label>
          ))}
        </div>
        <p className="text-gray-400 mb-4">Selected Waste Types: {wasteTypes.join(', ')}</p>
        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={wasteTypes.length === 0}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepTwo;