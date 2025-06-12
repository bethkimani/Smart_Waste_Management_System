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

const AppContent = () => {
  const [loggedInRole, setLoggedInRole] = useState(localStorage.getItem('loggedInRole') || null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('loggedInRole');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (role && isAuthenticated) {
      setLoggedInRole(role);
    } else {
      setLoggedInRole(null);
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('loggedInRole');
    }
  }, []);

  const handleRoleSelection = (role) => {
    setLoggedInRole(null); // Reset role before navigating to login
    localStorage.removeItem('isAuthenticated'); // Ensure no auto-authentication
    localStorage.removeItem('loggedInRole');
    navigate(`/${role}s/login`); // Navigate to the login page for the selected role
  };

  const handleRequestPickup = () => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      // Modal handling is now in Navbar, so no action here for unauthenticated users
    } else {
      navigate(`/${loggedInRole}s/raise-request`); // Navigate to raise-request for authenticated users
    }
  };

  const handleLogout = () => {
    setLoggedInRole(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loggedInRole');
    navigate('/hero');
  };

  const handleLoginSuccess = (role) => {
    setLoggedInRole(role);
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('loggedInRole', role);
    navigate(`/${role}s/dashboard`); // Redirect to dashboard after login
  };

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Render layout components only for non-dashboard routes */}
      {!location.pathname.startsWith('/users/') && !location.pathname.startsWith('/admins/') && !location.pathname.startsWith('/drivers/') && (
        <>
          <Header className="hidden md:block" />
          <Navbar onRequestPickup={handleRequestPickup} handleRoleSelection={handleRoleSelection} />
        </>
      )}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/hero" />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/company" element={<div>Company Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/users/login" element={<Login onLoginSuccess={() => handleLoginSuccess('user')} />} />
          <Route path="/users/signup" element={<Signup onLoginSuccess={() => handleLoginSuccess('user')} />} />
          <Route path="/admins/login" element={<AdminLogin onLoginSuccess={() => handleLoginSuccess('admin')} />} />
          <Route path="/admins/signup" element={<AdminSignup onLoginSuccess={() => handleLoginSuccess('admin')} />} />
          <Route path="/drivers/login" element={<DriverLogin onLoginSuccess={() => handleLoginSuccess('driver')} />} />
          <Route path="/drivers/signup" element={<DriverSignup onLoginSuccess={() => handleLoginSuccess('driver')} />} />
          {isAuthenticated && loggedInRole && (
            <>
              <Route
                path="/users/*"
                element={<UserRoutes onLogout={handleLogout} onRequestPickup={handleRequestPickup} />}
              />
              <Route
                path="/admins/*"
                element={<AdminRoutes loggedInRole={loggedInRole} onLogout={handleLogout} onRequestPickup={handleRequestPickup} />}
              />
              <Route
                path="/drivers/*"
                element={<DriverRoutes onLogout={handleLogout} />}
              />
            </>
          )}
          <Route path="*" element={<Navigate to={isAuthenticated ? `/${loggedInRole}s/dashboard` : '/hero'} />} />
        </Routes>
      </main>
      {!location.pathname.startsWith('/users/') && !location.pathname.startsWith('/admins/') && !location.pathname.startsWith('/drivers/') && (
        <Footer className="hidden md:block" />
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