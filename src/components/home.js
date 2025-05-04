import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Link to external CSS

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <h2 className="navbar-title">Referral App</h2>
        <div className="nav-links">
          <button onClick={() => navigate('/')} className="nav-button">Home</button>
          <button onClick={() => navigate('/login')} className="nav-button">Login</button>
          <button onClick={() => navigate('/register')} className="nav-button">Register</button>
          <button onClick={() => navigate('/info')} className="nav-button">App Info</button>
        </div>
      </nav>

      {/* Welcome Message */}
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to Our Referral Application</h1>
        <p className="homepage-description">
          Get referred by professionals working in top MNCs. Register and connect now!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
