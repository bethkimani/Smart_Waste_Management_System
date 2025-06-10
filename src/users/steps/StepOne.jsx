import React, { useState, useEffect } from 'react';

const StepOne = ({ formData, onUpdate }) => {
  const [postcodes, setPostcodes] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch('/skips.json')
      .then(response => response.json())
      .then(data => {
        const uniquePostcodes = [...new Set(data.map(skip => skip.postcode))];
        setPostcodes(uniquePostcodes);
        setAddresses(data);
      })
      .catch(error => console.error('Error fetching skips.json:', error));
  }, []);

  const handlePostcodeChange = (e) => {
    const selectedPostcode = e.target.value;
    const selectedAddress = ''; // Reset address on postcode change
    onUpdate({ postcode: selectedPostcode, address: selectedAddress });
    console.log('Postcode changed to:', selectedPostcode, 'Address reset to:', selectedAddress); // Debug
  };

  const handleAddressChange = (e) => {
    const selectedAddress = e.target.value;
    onUpdate({ address: selectedAddress });
    console.log('Address changed to:', selectedAddress); // Debug
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-teal-300">Enter Postcode</h2>
      <div className="bg-teal-800/50 p-4 rounded-lg">
        <select
          value={formData.postcode || ''}
          onChange={handlePostcodeChange}
          className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
        >
          <option value="">Select Postcode</option>
          {postcodes.map((postcode, index) => (
            <option key={index} value={postcode}>{postcode}</option>
          ))}
        </select>
      </div>
      <div className="bg-teal-800/50 p-4 rounded-lg">
        <select
          value={formData.address || ''}
          onChange={handleAddressChange}
          className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
          disabled={!formData.postcode}
        >
          <option value="">Select Address</option>
          {formData.postcode &&
            addresses
              .filter(addr => addr.postcode === formData.postcode)
              .map((addr, index) => (
                <option key={index} value={addr.address}>{addr.address}</option>
              ))}
        </select>
      </div>
    </div>
  );
};

export default StepOne;