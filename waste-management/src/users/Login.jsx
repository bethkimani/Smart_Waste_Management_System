import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/users/dashboard');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="max-w-md w-full p-6 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">SmartTrash</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label htmlFor="email" className="block text-gray-600 text-sm font-normal mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded border border-gray-200 text-sm w-full font-normal h-11 p-3 focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label htmlFor="password" className="block text-gray-600 text-sm font-normal mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded border border-gray-200 text-sm w-full font-normal h-11 p-3 focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-6">
          Don’t have an account?{' '}
          <Link to="/users/signup" className="text-sm text-[#7747ff]">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;