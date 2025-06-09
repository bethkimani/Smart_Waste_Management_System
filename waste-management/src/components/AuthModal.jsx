import React, { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [role, setRole] = useState('user');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Select Role</h2>
        <div className="mb-4">
          <label className="mr-4 text-black">
            <input
              type="radio"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
              className="mr-2"
            />
            User
          </label>
          <label className="text-black">
            <input
              type="radio"
              value="admin"
              checked={role === 'admin'}
              onChange={() => setRole('admin')}
              className="mr-2"
            />
            Admin
          </label>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log(`Redirect to ${role} dashboard`);
              onClose();
            }}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;