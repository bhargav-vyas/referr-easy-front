import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/home/message')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching home message:', error);
        setMessage('Failed to load welcome message.');
      });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">ReferrEasy</h1>
      <p className="home-message">{message}</p>
      <div className="home-buttons">
        <a href="/register" className="home-btn">Register</a>
        <a href="/login" className="home-btn">Login</a>
      </div>
    </div>
  );
}

export default Home;
