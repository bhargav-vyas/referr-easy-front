import React, { useState } from 'react';
import axios from 'axios';
// import './SignUp.css'; // Make sure you create this CSS file or rename your existing Register.css

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setMessage('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPayload = {
      username: formData.username,
      password: formData.password
    };

    try {
      const response = await axios.post('http://localhost:8080/api/users/resister', userPayload);
      console.log('User signed up:', response.data);
      setMessage('Sign-up successful!');
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      console.error('Sign-up error:', error);
      setError(error.response?.data?.message || 'Sign-up failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email (optional)"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default SignUp;
