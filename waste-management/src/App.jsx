import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import UserRoutes from './users/userRoutes';
import AdminRoutes from './admins/adminRoutes';
import DriverRoutes from './drivers/driverRoutes';
import ErrorBoundary from './ErrorBoundary';
import Login from './users/Login';
import Signup from './users/Signup';
import AdminLogin from './admins/Login';
import AdminSignup from './admins/AdminSignup';
import DriverLogin from './drivers/Login';
import DriverSignup from './drivers/DriverSignup';
import RequestPickupModal from './components/RequestPickupModal';

const AppContent = () => {
  const [loggedInRole, setLoggedInRole] = useState(null);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setLoggedInRole(role);
    if (role === 'user') navigate('/users/login');
    else if (role === 'admin') navigate('/admins/login');
    else if (role === 'driver') navigate('/drivers/login');
  };

  const handleRequestPickup = () => {
    if (loggedInRole) {
      setIsRequestModalOpen(true);
    } else {
      handleRoleSelection('user');
    }
  };

  const handleLogout = () => {
    setLoggedInRole(null);
    navigate('/hero');
  };

  const handleLoginSuccess = (role) => {
    setLoggedInRole(role);
    if (role === 'user') navigate('/users/dashboard');
    else if (role === 'admin') navigate('/admins/dashboard');
    else if (role === 'driver') navigate('/drivers/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {!loggedInRole && (
        <>
          <Header />
          <Navbar onRequestPickup={handleRoleSelection} />
          <main className="flex-grow">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Navigate to="/hero" />} />
                <Route path="/hero" element={<Hero />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
        </>
      )}
      <Routes>
        <Route path="/users/login" element={<Login onLoginSuccess={() => handleLoginSuccess('user')} />} />
        <Route path="/users/signup" element={<Signup onLoginSuccess={() => handleLoginSuccess('user')} />} />
        <Route path="/admins/login" element={<AdminLogin onLoginSuccess={() => handleLoginSuccess('admin')} />} />
        <Route path="/admins/signup" element={<AdminSignup onLoginSuccess={() => handleLoginSuccess('admin')} />} />
        <Route path="/drivers/login" element={<DriverLogin onLoginSuccess={() => handleLoginSuccess('driver')} />} />
        <Route path="/drivers/signup" element={<DriverSignup onLoginSuccess={() => handleLoginSuccess('driver')} />} />
        <Route path="/users/*" element={<UserRoutes loggedInRole={loggedInRole} onLogout={handleLogout} onRequestPickup={handleRequestPickup} />} />
        <Route path="/admins/*" element={<AdminRoutes loggedInRole={loggedInRole} onLogout={handleLogout} onRequestPickup={handleRequestPickup} />} />
        <Route path="/drivers/*" element={<DriverRoutes loggedInRole={loggedInRole} onLogout={handleLogout} onRequestPickup={handleRequestPickup} />} />
      </Routes>
      {loggedInRole && isRequestModalOpen && (
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
      <AppContent />
    </Router>
  );
};

export default App;