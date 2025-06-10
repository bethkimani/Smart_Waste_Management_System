// src/users/UserRoutes.jsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import RaiseRequest from './RaiseRequest';
import ReportWaste from './ReportWaste';
import CollectWaste from './CollectWaste';
import Rewards from './Rewards';
import Leaderboard from './Leaderboard';
import ViolationBilling from './ViolationBilling';
import TrackingProcess from './TrackingProcess';
import ReportHistory from './ReportHistory';
import WasteChat from './WasteChat';
import Login from './Login';
import Signup from './Signup';

const UserRoutes = ({ onLogout }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const loggedInRole = localStorage.getItem('loggedInRole');

  const handleRequestPickup = (role) => {
    // This will be passed to Dashboard
  };

  if (!isAuthenticated || loggedInRole !== 'user') {
    return <Navigate to="/users/login" />;
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-900 text-white">
      <Sidebar onLogout={() => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('loggedInRole');
        localStorage.removeItem('selectedRole');
        localStorage.removeItem('selectedUser');
        onLogout();
      }} />
      <div className="flex-1 p-4 sm:p-8 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard onLogout={onLogout} onRequestPickup={handleRequestPickup} />} />
          <Route path="/raise-request/*" element={<RaiseRequest />} />
          <Route path="/report-waste" element={<ReportWaste />} />
          <Route path="/collect-waste" element={<CollectWaste />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/violation-billing" element={<ViolationBilling />} />
          <Route path="/tracking-process" element={<TrackingProcess />} />
          <Route path="/report-history" element={<ReportHistory />} />
          <Route path="/waste-chat" element={<WasteChat />} />
          <Route path="*" element={<Navigate to="/users/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserRoutes;