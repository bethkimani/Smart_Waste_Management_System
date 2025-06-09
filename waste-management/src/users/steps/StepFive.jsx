import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepFive = () => {
  const [deliveryDate, setDeliveryDate] = useState('');
  const [collectionDate, setCollectionDate] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (deliveryDate) navigate('/waste-collection-process/step/6');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="bg-green-900 p-4 flex justify-between mb-4">
        <div className="flex space-x-4 text-white">
          <span>Postcode</span>
          <span>Waste Type</span>
          <span>Choose Skip Size</span>
          <span>Permit Check</span>
          <span className="text-blue-400">Schedule Collection</span>
          <span>Payment Information</span>
        </div>
      </nav>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Schedule Collection</h2>
        <input
          type="date"
          value={deliveryDate}
          onChange={(e) => {
            setDeliveryDate(e.target.value);
            setCollectionDate(new Date(new Date(e.target.value).setDate(new Date(e.target.value).getDate() + 14)).toISOString().split('T')[0]);
          }}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          min={new Date().toISOString().split('T')[0]}
        />
        <p>Collection Date: {collectionDate || 'TBD'}</p>
        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4" disabled={!deliveryDate}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFive;