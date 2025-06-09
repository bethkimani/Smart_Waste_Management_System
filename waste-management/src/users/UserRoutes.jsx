import { Route, Routes } from 'react-router-dom';
import UserDashboard from './UserDashboard';
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
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/dashboard" element={<UserDashboard loggedInRole={loggedInRole} onLogout={onLogout} onRequestPickup={onRequestPickup} />} />
        <Route path="/step1" element={<StepOne />} />
        <Route path="/step2" element={<StepTwo />} />
        <Route path="/step3" element={<StepThree />} />
        <Route path="/step4" element={<StepFour />} />
        <Route path="/step5" element={<StepFive />} />
        <Route path="/step6" element={<StepSix />} />
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
  );
};

export default UserRoutes;