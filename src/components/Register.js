import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', formData);
      console.log('User registered:', response.data);
      alert('Registered successfully!');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
  };
return (
  <div className="register-container">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  </div>
);

}

export default Register;
