import { Route, Routes, Outlet } from 'react-router-dom';
import DriverDashboard from './DriverDashboard';
import DriverSignup from './DriverSignup';
import RegisterTruck from './RegisterTruck';
import RouteReview from './RouteReview';
import CollectWaste from './CollectWaste';
import TripHistory from './TripHistory';
import DriverSidebar from './DriverSidebar';
import ErrorBoundary from '../ErrorBoundary'; // Adjust path as needed

const DriverLayout = () => {
  return (
    <div className="flex">
      <DriverSidebar />
      <main className="ml-64 flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

const DriverRoutes = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const loggedInRole = localStorage.getItem('loggedInRole');

  if (!isAuthenticated || loggedInRole !== 'driver') {
    return <Navigate to="/drivers/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/signup" element={<DriverSignup />} />
        <Route element={<DriverLayout />}>
          <Route path="/dashboard" element={<ErrorBoundary><DriverDashboard /></ErrorBoundary>} />
          <Route path="/register-truck" element={<ErrorBoundary><RegisterTruck /></ErrorBoundary>} />
          <Route path="/route-review" element={<ErrorBoundary><RouteReview /></ErrorBoundary>} />
          <Route path="/collect-waste" element={<ErrorBoundary><CollectWaste /></ErrorBoundary>} />
          <Route path="/trip-history" element={<ErrorBoundary><TripHistory /></ErrorBoundary>} />
          <Route path="*" element={<Navigate to="/drivers/dashboard" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default DriverRoutes;