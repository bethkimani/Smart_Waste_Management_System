import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';
import StepSix from './steps/StepSix';
import ReportWaste from './ReportWaste';
import CollectWaste from './CollectWaste';
import Rewards from './Rewards';
import Leaderboard from './Leaderboard';
import RouteReviews from './RouteReviews';
import Pickups from './Pickups';
import Trucks from './Trucks';
import RouteHistory from './RouteHistory';
import Violations from './Violations';
import Campaigns from './Campaigns';

const UserRoutes = ({ loggedInRole, onLogout, onRequestPickup }) => {
  if (!loggedInRole || loggedInRole !== 'user') {
    return <Navigate to="/hero" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 p-8 overflow-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard loggedInRole={loggedInRole} onLogout={onLogout} onRequestPickup={onRequestPickup} />} />
          <Route path="/waste-collection-process/step/1" element={<StepOne />} />
          <Route path="/waste-collection-process/step/2" element={<StepTwo />} />
          <Route path="/waste-collection-process/step/3" element={<StepThree />} />
          <Route path="/waste-collection-process/step/4" element={<StepFour />} />
          <Route path="/waste-collection-process/step/5" element={<StepFive />} />
          <Route path="/waste-collection-process/step/6" element={<StepSix />} />
          <Route path="/report-waste" element={<ReportWaste />} />
          <Route path="/collect-waste" element={<CollectWaste />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/route-reviews" element={<RouteReviews />} />
          <Route path="/pickups" element={<Pickups />} />
          <Route path="/trucks" element={<Trucks />} />
          <Route path="/route-history" element={<RouteHistory />} />
          <Route path="/violations" element={<Violations />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserRoutes;