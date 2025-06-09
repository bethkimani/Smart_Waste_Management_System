import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './AdminSignup';
import AdminDashboard from './AdminDashboard';

const AdminRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        {/* Remove /login and /signup here as they are handled at the root level */}
      </Routes>
    </div>
  );
};

export default AdminRoutes;