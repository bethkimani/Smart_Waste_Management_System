import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StepOne = ({ formData, onUpdate, navigate }) => {
  const [postcodes, setPostcodes] = useState([]);
  const [selectedPostcode, setSelectedPostcode] = useState(formData.postcode || '');
  const [selectedCity, setSelectedCity] = useState(formData.city || '');
  const [selectedStreet, setSelectedStreet] = useState(formData.street || '');
  const [selectedHouseFlat, setSelectedHouseFlat] = useState(formData.house_flat_number || '');
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch('/skips.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch skips.json');
        return response.json();
      })
      .then((data) => {
        setAddresses(data);
        const uniquePostcodes = [...new Set(data.map((addr) => addr.postcode))];
        setPostcodes(uniquePostcodes);

        if (formData.postcode) {
          const matchingAddress = data.find((addr) => addr.postcode.toLowerCase() === formData.postcode.toLowerCase());
          if (matchingAddress) {
            setSelectedCity(matchingAddress.city);
            setSelectedStreet(matchingAddress.street);
            setSelectedHouseFlat(matchingAddress.house_flat_number);
            onUpdate({ ...formData, ...matchingAddress });
          } else {
            resetAddressFields();
          }
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to load postcode data. Please try again.');
        setIsLoading(false);
      });
  }, [formData.postcode, onUpdate]);

  const resetAddressFields = () => {
    setSelectedCity('');
    setSelectedStreet('');
    setSelectedHouseFlat('');
    onUpdate({ ...formData, postcode: '', city: '', street: '', house_flat_number: '', address: '' });
  };

  const handlePostcodeChange = (e) => {
    const postcode = e.target.value;
    setSelectedPostcode(postcode);
    const matchingAddress = addresses.find((addr) => addr.postcode.toLowerCase() === postcode.toLowerCase());
    if (matchingAddress) {
      setSelectedCity(matchingAddress.city);
      setSelectedStreet(matchingAddress.street);
      setSelectedHouseFlat(matchingAddress.house_flat_number);
      onUpdate({
        ...formData,
        postcode,
        city: matchingAddress.city,
        street: matchingAddress.street,
        house_flat_number: matchingAddress.house_flat_number,
        address: `${matchingAddress.house_flat_number} ${matchingAddress.street}, ${matchingAddress.city}, ${postcode}`,
      });
    } else {
      resetAddressFields();
    }
  };

  const handleContinue = () => {
    if (!isContinueDisabled) {
      const nextStep = formData.step + 1;
      onUpdate({ ...formData, step: nextStep });
      navigate(`/users/raise-request/step/${nextStep}`);
    }
  };

  const isContinueDisabled = !selectedPostcode || !selectedCity || !selectedStreet || !selectedHouseFlat || isLoading;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 flex flex-col"
    >
      <div className="bg-teal-900/50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4 text-center">Enter Postcode</h2>
        <p className="text-gray-300 text-center mb-4">Select your location</p>
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <div className="space-y-4 max-h-[70vh] overflow-y-auto">
          <select
            value={selectedPostcode}
            onChange={handlePostcodeChange}
            className="w-full p-3 bg-gray-700 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
            disabled={isLoading}
          >
            <option value="">Select Postcode</option>
            {postcodes.map((postcode, index) => (
              <option key={index} value={postcode} className="bg-gray-700 text-white">
                {postcode}
              </option>
            ))}
          </select>
          <input type="text" value={selectedCity} readOnly placeholder="City" className="w-full p-3 bg-gray-700 border border-teal-300 rounded-lg text-white" />
          <input type="text" value={selectedStreet} readOnly placeholder="Street Name" className="w-full p-3 bg-gray-700 border border-teal-300 rounded-lg text-white" />
          <input type="text" value={selectedHouseFlat} readOnly placeholder="House/Flat Number" className="w-full p-3 bg-gray-700 border border-teal-300 rounded-lg text-white" />
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate('/users/dashboard')}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
            disabled={isLoading}
          >
            Back
          </button>
          <button
            onClick={handleContinue}
            disabled={isContinueDisabled}
            className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded disabled:bg-gray-500"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StepOne;