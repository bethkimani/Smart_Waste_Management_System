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

const UserRoutes = ({ loggedInRole, onLogout, onRequestPickup }) => {
  if (!loggedInRole || loggedInRole !== 'user') {
    return <Navigate to="/hero" />;
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-900 text-white">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 p-4 sm:p-8 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard loggedInRole={loggedInRole} onLogout={onLogout} onRequestPickup={onRequestPickup} />} />
          <Route path="/raise-request/*" element={<RaiseRequest />} />
          <Route path="/report-waste" element={<ReportWaste />} />
          <Route path="/collect-waste" element={<CollectWaste />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/violation-billing" element={<ViolationBilling />} />
          <Route path="/tracking-process" element={<TrackingProcess />} />
          <Route path="/report-history" element={<ReportHistory />} />
          <Route path="/waste-chat" element={<WasteChat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserRoutes;