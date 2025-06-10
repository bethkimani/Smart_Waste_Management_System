import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import UserRoutes from './users/UserRoutes';
import AdminRoutes from './admins/AdminRoutes';
import DriverRoutes from './drivers/DriverRoutes';
import ErrorBoundary from './ErrorBoundary';
import Login from './users/Login';
import Signup from './users/Signup';
import AdminLogin from './admins/Login';
import AdminSignup from './admins/AdminSignup';
import DriverLogin from './drivers/Login';
import DriverSignup from './drivers/DriverSignup';
import RequestPickupModal from './components/RequestPickupModal';

const AppContent = () => {
  const [loggedInRole, setLoggedInRole] = useState(localStorage.getItem('loggedInRole') || null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  console.log('Current pathname:', location.pathname);
  console.log('loggedInRole:', loggedInRole);
  console.log('isAuthenticated:', localStorage.getItem('isAuthenticated'));

  useEffect(() => {
    // Sync loggedInRole with localStorage on mount
    const role = localStorage.getItem('loggedInRole');
    if (role && localStorage.getItem('isAuthenticated') === 'true') {
      setLoggedInRole(role);
    } else {
      setLoggedInRole(null);
    }
  }, []);

  const handleRoleSelection = (role) => {
    setLoggedInRole(null); // Reset to allow login rendering
    navigate(`/${role}s/login`);
  };

  const handleRequestPickup = (role) => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      handleRoleSelection(role); // Navigate to login if not authenticated
    } else {
      setIsRequestModalOpen(true);
    }
  };

  const handleLogout = () => {
    setLoggedInRole(null);
    setIsRequestModalOpen(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loggedInRole');
    navigate('/hero');
  };

  const handleLoginSuccess = (role) => {
    setLoggedInRole(role);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('loggedInRole', role);
    if (role === 'user') navigate('/users/dashboard');
    else if (role === 'admin') navigate('/admins/dashboard');
    else if (role === 'driver') navigate('/drivers/dashboard');
  };

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthenticated && (
        <>
          <Header className="hidden md:block" />
          <Navbar onRequestPickup={handleRequestPickup} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/hero" />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="/users/login" element={<Login onLoginSuccess={() => handleLoginSuccess('user')} />} />
              <Route path="/users/signup" element={<Signup onLoginSuccess={() => handleLoginSuccess('user')} />} />
              <Route path="/admins/login" element={<AdminLogin onLoginSuccess={() => handleLoginSuccess('admin')} />} />
              <Route path="/admins/signup" element={<AdminSignup onLoginSuccess={() => handleLoginSuccess('admin')} />} />
              <Route path="/drivers/login" element={<DriverLogin onLoginSuccess={() => handleLoginSuccess('driver')} />} />
              <Route path="/drivers/signup" element={<DriverSignup onLoginSuccess={() => handleLoginSuccess('driver')} />} />
            </Routes>
          </main>
          <Footer className="hidden md:block" />
        </>
      )}
      {isAuthenticated && loggedInRole && (
        <Routes>
          <Route path="/users/*" element={<UserRoutes onLogout={handleLogout} />} />
          <Route path="/admins/*" element={<AdminRoutes loggedInRole={loggedInRole} onLogout={handleLogout} onRequestPickup={handleRequestPickup} />} />
          <Route path="/drivers/*" element={<DriverRoutes />} />
          <Route path="*" element={<Navigate to={`/${loggedInRole}s/dashboard`} />} />
        </Routes>
      )}
      {isAuthenticated && isRequestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-100">
          <RequestPickupModal onClose={() => setIsRequestModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </Router>
  );
};

export default App;