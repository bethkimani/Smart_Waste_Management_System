// src/users/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      console.log('Login attempt:', { email });
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('loggedInRole', 'user');
      if (onLoginSuccess) onLoginSuccess('user');
      navigate('/users/dashboard');
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 rounded-md text-black bg-white">
        <h2 className="text-2xl font-bold mb-4">User Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
        <p className="mt-4">
          Don’t have an account? <Link to="/users/signup" className="text-blue-500">Sign up</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;