import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔑 Import useNavigate
import axios from 'axios';
import './Dash.css';

function Dash() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // 🧭 Hook for navigation

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/job/getAll');
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  // 🔐 Sign Out function
  const handleSignOut = () => {
    // Optional: Clear tokens or session storage here
    navigate('/login'); // Redirect to login page
  };

  const goToJobPost = () => {
    navigate('/jobpost');
  };

  return (
    <div className="dash-container">
      <header className="header">
        <h1>Available Jobs</h1>
        <div className="button-group">
          <button className="post-job-btn" onClick={goToJobPost}>Post Job</button>
          <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
        </div>
      </header>
      <main className="content">
        <div className="job-list">
          <div className="job-grid">
            {jobs.map((job) => (
              <div className="job-card" key={job.id}>
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dash;
