import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CollectWaste = () => {
  const [location, setLocation] = useState('');
  const [wasteType, setWasteType] = useState('trash');
  const [estimatedAmount, setEstimatedAmount] = useState('');
  const [photo, setPhoto] = useState(null);
  const [verifiedWasteType, setVerifiedWasteType] = useState('');
  const [verifiedAmount, setVerifiedAmount] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy data - simulate photo upload and admin notification
    console.log({ location, wasteType, estimatedAmount, photo: photo ? 'Photo uploaded' : 'No photo' });
    setVerifiedWasteType(wasteType);
    setVerifiedAmount(estimatedAmount);
    alert('Waste verified by AI! Notification sent to admin with photo (dummy).');
    navigate('/drivers/trip-history');
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0] || 'dummy-photo.jpg'); // Dummy photo
  };

  return (
    <div className="bg-white rounded-3xl p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Collect Waste</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Waste Type</label>
          <select
            value={wasteType}
            onChange={(e) => setWasteType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="trash">Trash</option>
            <option value="recycle">Recycle</option>
            <option value="organics">Organics</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600">Estimated Amount</label>
          <input
            type="text"
            value={estimatedAmount}
            onChange={(e) => setEstimatedAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Upload Confirmation Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Submit
        </button>
        {verifiedWasteType && (
          <div className="mt-4">
            <p>Verified Waste Type: {verifiedWasteType}</p>
            <p>Verified Amount: {verifiedAmount}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CollectWaste;