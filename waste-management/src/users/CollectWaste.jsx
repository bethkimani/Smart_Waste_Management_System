import React, { useState } from 'react';

const CollectWaste = () => {
  const [collectPhoto, setCollectPhoto] = useState(null);
  const [verifiedCollection, setVerifiedCollection] = useState('');
  const [error, setError] = useState('');

  const handleVerifyCollection = () => {
    if (!collectPhoto) return setError('Please upload a collection photo');
    setVerifiedCollection('Waste collected successfully');
    alert('Collection verified! Admin notified.');
    console.log('Admin notified of collection');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Collect Waste</h2>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <div className="border-dashed border-2 border-green-300 p-4 mb-4">
          <input type="file" onChange={(e) => setCollectPhoto(e.target.files[0])} className="mb-2" />
          <button onClick={handleVerifyCollection} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Verify Collection</button>
        </div>
        {verifiedCollection && <p className="text-green-600">{verifiedCollection}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default CollectWaste;