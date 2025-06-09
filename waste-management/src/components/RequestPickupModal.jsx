import React, { useState } from 'react';

const RequestPickupModal = ({ onClose }) => {
  const [pickupDetails, setPickupDetails] = useState({
    address: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending request (replace with API call)
    console.log('Pickup Request Submitted:', pickupDetails);
    alert('Pickup request submitted successfully!');
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4 text-black">Request Pickup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="block relative">
          <label htmlFor="address" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={pickupDetails.address}
            onChange={(e) => setPickupDetails({ ...pickupDetails, address: e.target.value })}
            required
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label htmlFor="date" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={pickupDetails.date}
            onChange={(e) => setPickupDetails({ ...pickupDetails, date: e.target.value })}
            required
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label htmlFor="time" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={pickupDetails.time}
            onChange={(e) => setPickupDetails({ ...pickupDetails, time: e.target.value })}
            required
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestPickupModal;