// src/admins/Signup.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminSignup = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      console.log('Admin Signup attempt:', { name, email });
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loggedInRole', 'admin');
      if (onLoginSuccess) onLoginSuccess('admin');
      navigate('/admins/dashboard');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 rounded-md text-black bg-white">
        <h2 className="text-2xl font-bold mb-4">Admin Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/admins/login" className="text-green-500">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default AdminSignup;