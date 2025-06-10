import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterTruck = () => {
  const [truckId, setTruckId] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState('available');
  const [wasteType, setWasteType] = useState('trash');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy data - simulate photo upload and admin notification
    console.log({ truckId, price, availability, wasteType, location, photo: photo ? 'Photo uploaded' : 'No photo' });
    alert('Truck registered! Notification sent to admin with photo (dummy).');
    navigate('/drivers/route-review');
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.files[0] || 'dummy-photo.jpg'); // Dummy photo
  };

  return (
    <div className="bg-white rounded-3xl p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Register Truck</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Truck ID</label>
          <input
            type="text"
            value={truckId}
            onChange={(e) => setTruckId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Availability</label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
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
          <label className="block text-gray-600">Location/Area</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Upload Truck Photo</label>
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
      </form>
    </div>
  );
};

export default RegisterTruck;