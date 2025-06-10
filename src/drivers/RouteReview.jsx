import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RouteReview = () => {
  const [routeAccepted, setRouteAccepted] = useState(false);
  const [userLocation, setUserLocation] = useState('Nairobi, Kenya');
  const [destination, setDestination] = useState('Nearby Location');
  const [directions, setDirections] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (destination) {
      console.log(`AI suggests route from ${userLocation} to ${destination} at ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })}`);
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
        <input
          type="text"
          placeholder="Search destination..."
          value={destination}
          onChange={(e) => setDestination(e.target.value || 'Nearby Location')}
          className="w-full p-2 border border-gray-200 rounded mb-4"
        />
        <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d5db" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="600" height="400" fill="url(#grid)" />
            {directions && (
              <path d="M 120 300 Q 200 200 480 280" stroke="#8B5CF6" strokeWidth="4" fill="none" />
            )}
            <circle cx="120" cy="300" r="6" fill="#10B981" />
            {destination && <circle cx="480" cy="280" r="6" fill="#F59E0B" />}
          </svg>
          <div className="absolute top-2 left-2 text-white bg-gray-800 bg-opacity-75 p-1 rounded">
            You are here: {userLocation}
          </div>
          {destination && (
            <div className="absolute bottom-2 right-2 text-white bg-gray-800 bg-opacity-75 p-1 rounded">
              Destination: {destination}
            </div>
          )}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <button
            type="submit"
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