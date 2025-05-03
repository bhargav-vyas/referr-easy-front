import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
  <div className="homepage-container">
  <h1 className="homepage-title">Welcome to Our Application</h1>
  <div className="button-group">
    <button onClick={() => navigate('/login')} className="login-button">Login</button>
    <button onClick={() => navigate('/register')} className="register-button">Register</button>
  </div>
</div>
  );
};

export default HomePage;
