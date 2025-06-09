import React from 'react';

const TripHistory = () => {
  const trips = [
    { id: 1, date: '2025-06-08', location: 'Lake Thelma', wasteType: 'Trash', photo: 'path/to/photo1.jpg' },
    { id: 2, date: '2025-06-07', location: 'Fort Beryl', wasteType: 'Recycle', photo: 'path/to/photo2.jpg' },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Trip History</h1>
      <ul className="space-y-4">
        {trips.map((trip) => (
          <li key={trip.id} className="border p-2 rounded">
            <p>Date: {trip.date}</p>
            <p>Location: {trip.location}</p>
            <p>Waste Type: {trip.wasteType}</p>
            <img src={trip.photo} alt="Collected Waste" className="mt-2 w-full h-32 object-cover rounded" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripHistory;