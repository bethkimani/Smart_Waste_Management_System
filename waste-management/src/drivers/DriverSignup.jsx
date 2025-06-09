import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverSignup = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number && email && license && password) {
      // Simulate signup success (replace with actual API call)
      onLoginSuccess();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="flex justify-center my-12 bg-gray-100">
      <div className="max-w-md flex flex-col p-4 rounded-md text-black bg-white px-12 py-6">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Driver Signup <span className="text-[#7747ff]">SmartTrash</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
          Create a driver account
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="block relative">
            <label htmlFor="name" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label htmlFor="number" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label htmlFor="email" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label htmlFor="license" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
              Driver License
            </label>
            <input
              type="text"
              id="license"
              name="license"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              required
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label htmlFor="password" className="block text-gray-600 text-sm leading-[140%] font-normal mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Already have an account?{' '}
          <a href="/drivers/login" className="text-sm text-[#7747ff]">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default DriverSignup;