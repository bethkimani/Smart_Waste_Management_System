import React, { useState } from 'react';

const RequestPickupModal = ({ onClose, onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelection = () => {
    if (selectedRole) {
      onSelectRole(selectedRole);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-11/12 max-w-md">
      <h2 className="text-xl font-bold mb-4 text-green-400">Select Role</h2>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
      >
        <option value="">Select a role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="driver">Driver</option>
      </select>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleRoleSelection}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!selectedRole}
        >
          Proceed to Login
        </button>
      </div>
    </div>
  );
};

export default RequestPickupModal;