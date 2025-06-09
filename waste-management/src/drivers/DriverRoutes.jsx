import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './DriverSignup';
import DriverDashboard from './DriverDashboard';

const DriverRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/dashboard" element={<DriverDashboard />} />
        {/* Remove /login and /signup here as they are handled at the root level */}
      </Routes>
    </div>
  );
};

export default DriverRoutes;