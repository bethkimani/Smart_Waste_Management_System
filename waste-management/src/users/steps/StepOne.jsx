import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepOne = () => {
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (postcode && address) navigate('/users/raise-request/step/2');
  };

  const handleBack = () => {
    navigate('/users/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <nav className="bg-green-900 p-4 flex justify-between mb-4 flex-wrap">
        <div className="flex space-x-4 text-white flex-wrap">
          <span className="text-blue-400">Postcode</span>
          <span>Waste Type</span>
          <span>Choose Skip Size</span>
          <span>Permit Check</span>
          <span>Schedule Collection</span>
          <span>Payment Information</span>
        </div>
      </nav>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Enter Postcode</h2>
        <input
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          placeholder="Enter postcode"
        />
        <select
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
        >
          <option value="">Select Address</option>
          <option value="195 Ashby Road, Hinckley LE10 1SH">195 Ashby Road, Hinckley LE10 1SH</option>
        </select>
        <div className="flex justify-between mt-4">
          <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Back
          </button>
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={!postcode || !address}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;