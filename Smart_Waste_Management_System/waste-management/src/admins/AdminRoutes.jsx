import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './AdminSignup';
import AdminDashboard from './AdminDashboard';
import AllRequests from './AllRequests';
import AllDrivers from './AllDrivers';
import Teams from './Teams';
import Payments from './Payments';

const AdminRoutes = ({ loggedInRole, onLogout, onRequestPickup }) => {
  if (!loggedInRole || loggedInRole !== 'admin') {
    return <Navigate to="/admins/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/all-requests" element={<AllRequests />} />
        <Route path="/all-drivers" element={<AllDrivers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="*" element={<Navigate to="/admins/dashboard" />} /> {/* Fallback to dashboard if no match */}
      </Routes>
    </div>
  );
};

export default AdminRoutes;