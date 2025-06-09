import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './AdminSignup';
import AdminDashboard from './AdminDashboard';

const AdminRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/manage-users" element={<AdminDashboard />} />
        <Route path="/manage-drivers" element={<AdminDashboard />} />
        <Route path="/all-requests" element={<AdminDashboard />} />
        <Route path="/all-drivers" element={<AdminDashboard />} />
        <Route path="/teams" element={<AdminDashboard />} />
        <Route path="/payments" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;