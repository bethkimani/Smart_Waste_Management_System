import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RouteReview = () => {
  const [routeAccepted, setRouteAccepted] = useState(false);
  const [userLocation, setUserLocation] = useState('Nairobi, Kenya'); // Mock location
  const [destination, setDestination] = useState('Nearby Location'); // Mock destination
  const [directions, setDirections] = useState(null);
  const navigate = useNavigate();

  // Mock AI route suggestion
  useEffect(() => {
    if (destination) {
      console.log(`AI suggests route from ${userLocation} to ${destination} at 08:54 PM EAT, June 09, 2025`);
      setDirections('Shortest path via main roads');
    }
  }, [userLocation, destination]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRouteAccepted(true);
    alert('Route accepted! Proceed to collect waste.');
    navigate('/drivers/collect-waste');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-3xl p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4">Route Review</h1>
        <p className="mb-4">Review the route to a nearby location. AI suggests the shortest path.</p>
        {/* Mock Search Input */}
        <input
          type="text"
          placeholder="Search destination..."
          value={destination}
          onChange={(e) => setDestination(e.target.value || 'Nearby Location')}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        {/* Mock Map with Static Image and Overlay */}
        <div
          className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4"
          style={{
            backgroundImage: `url('https://via.placeholder.com/600x400?text=Mock+Map+of+Nairobi')`, // Placeholder map image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Mock User Location Marker (Green) */}
          <div
            className="absolute"
            style={{
              top: '30%', // Adjust position manually
              left: '20%',
              width: '12px',
              height: '12px',
              backgroundColor: '#10B981', // Tailwind green-500
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          {/* Mock Destination Marker (Orange) */}
          {destination && (
            <div
              className="absolute"
              style={{
                top: '70%', // Adjust position manually
                left: '80%',
                width: '12px',
                height: '12px',
                backgroundColor: '#F59E0B', // Tailwind amber-500
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          )}
          {/* Mock Route Path (Purple) */}
          {directions && (
            <svg
              className="absolute inset-0"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 120 300 Q 200 200 480 280" // Quadratic curve for route (adjust coordinates)
                stroke="#8B5CF6" // Tailwind violet-500 (purple)
                strokeWidth="4"
                fill="none"
              />
            </svg>
          )}
          {/* Labels */}
          <div className="absolute top-2 left-2 text-white bg-gray-800 bg-opacity-75 p-1 rounded">
            You are here: {userLocation}
          </div>
          {destination && (
            <div className="absolute bottom-2 right-2 text-white bg-gray-800 bg-opacity-75 p-1 rounded">
              Destination: {destination}
            </div>
          )}
        </div>
        <form className="space-y-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:bg-gray-400"
            disabled={routeAccepted}
          >
            {routeAccepted ? 'Route Accepted' : 'Accept Route'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RouteReview;