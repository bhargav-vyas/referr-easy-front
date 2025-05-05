import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <h2 className="navbar-title">Referral App</h2>
        <div className="nav-links">
          <button onClick={() => navigate('/')} className="nav-button">Home</button>
          <button onClick={() => navigate('/login')} className="nav-button">Login</button>
          <button onClick={() => navigate('/register')} className="nav-button">Register</button>
          <button onClick={() => navigate('/info')} className="nav-button">App Info</button>
        </div>
      </nav>

      <div className="homepage-content">
        <h1 className="homepage-title">Get Referred to MNCs</h1>
        <p className="homepage-description">
          Join our network and connect with professionals who can refer you to top companies.
        </p>

        {/* Placeholder image from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1000&q=80"
          alt="Referral Visual"
          className="referral-animation"
        />
      </div>
    </div>
  );
};

export default HomePage;
