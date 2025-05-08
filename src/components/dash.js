import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dash.css';

function Dash() {
  const [jobs, setJobs] = useState([]);
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [referral, setReferral] = useState({
    name: '',
    phone: '',
    company: '',
    referredPost: '',
    designation: ''
  });

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

  const handleReferralSubmit = (e) => {
    e.preventDefault();
    alert('Referral submitted successfully!');
    setReferral({ name: '', phone: '', company: '', referredPost: '', designation: '' });
    setShowReferralForm(false); // Hide form after submission
  };

  return (
    <div className="dash-container">
      <header className="header">
        <h1>Available Jobs</h1>
        <div className="nav-buttons">
          <button onClick={() => setShowReferralForm(false)}>Job List</button>
          <button onClick={() => setShowReferralForm(true)}>Refer a Candidate</button>
        </div>
      </header>

      <main className="content">
        {!showReferralForm ? (
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
        ) : (
          <div className="form-section">
            <h2>Refer a Candidate</h2>
            <form onSubmit={handleReferralSubmit}>
              <input type="text" placeholder="Your Name" value={referral.name} onChange={(e) => setReferral({ ...referral, name: e.target.value })} required />
              <input type="text" placeholder="Contact Number" value={referral.phone} onChange={(e) => setReferral({ ...referral, phone: e.target.value })} required />
              <input type="text" placeholder="Company Name" value={referral.company} onChange={(e) => setReferral({ ...referral, company: e.target.value })} required />
              <input type="text" placeholder="Post Referred For" value={referral.referredPost} onChange={(e) => setReferral({ ...referral, referredPost: e.target.value })} required />
              <input type="text" placeholder="Your Designation" value={referral.designation} onChange={(e) => setReferral({ ...referral, designation: e.target.value })} required />
              <button type="submit">Submit Referral</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dash;
