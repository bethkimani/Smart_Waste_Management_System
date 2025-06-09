import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepFour = () => {
  const [placement, setPlacement] = useState('');
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (placement && (placement !== 'Public Road' || photo)) navigate('/users/step5');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="bg-green-900 p-4 flex justify-between mb-4">
        <div className="flex space-x-4 text-white">
          <span>Postcode</span>
          <span>Waste Type</span>
          <span>Choose Skip Size</span>
          <span className="text-blue-400">Permit Check</span>
          <span>Schedule Collection</span>
          <span>Payment Information</span>
        </div>
      </nav>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Permit Check</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => setPlacement('Private Property')}
            className={`bg-gray-700 p-4 rounded ${placement === 'Private Property' ? 'border-2 border-blue-400' : ''}`}
          >
            Private Property<br />Driveway or private land<br />No permit required
          </button>
          <button
            onClick={() => setPlacement('Public Road')}
            className={`bg-gray-700 p-4 rounded ${placement === 'Public Road' ? 'border-2 border-blue-400' : ''}`}
          >
            Public Road<br />Council or public property<br />Permit required
          </button>
        </div>
        {placement === 'Public Road' && (
          <div className="mb-4">
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="bg-gray-700 p-2 rounded w-full" />
          </div>
        )}
        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={!placement || (placement === 'Public Road' && !photo)}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFour;