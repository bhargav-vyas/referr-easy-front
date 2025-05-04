import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'; // Link to external CSS

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to Our Referral Application</h1>
      <div className="button-group">
        <button onClick={() => navigate('/login')} className="custom-button login-button">
          Login
        </button>
        <button onClick={() => navigate('/register')} className="custom-button register-button">
          Register
        </button>
        <button onClick={() => navigate('/info')} className="custom-button info-button">
          App Info
        </button>
      </div>
    </div>
  );
};

export default HomePage;
