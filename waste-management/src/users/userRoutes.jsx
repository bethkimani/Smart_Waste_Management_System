import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import UserDashboard from './UserDashboard';

const UserRoutes = ({ loggedInRole, onLogout, onRequestPickup }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/dashboard" element={<UserDashboard loggedInRole={loggedInRole} onLogout={onLogout} onRequestPickup={onRequestPickup} />} />
        {/* Remove /login and /signup here as they are handled at the root level */}
      </Routes>
    </div>
  );
};

export default UserRoutes;