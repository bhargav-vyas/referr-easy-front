import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dash.css';

function Dash() {
  const [activeTab, setActiveTab] = useState('viewJobs');
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    company: ''
  });
  const [referral, setReferral] = useState({
    name: '',
    email: '',
    referredPosition: ''
  });
  const [jobs, setJobs] = useState([]);

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

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/job/create', jobData);
      alert('Job posted successfully!');
      setJobData({ title: '', description: '', location: '', company: '' });
      fetchJobs();
    } catch (error) {
      alert('Error posting job.');
    }
  };

  const handleReferralSubmit = (e) => {
    e.preventDefault();
    alert('Referral submitted successfully!');
    setReferral({ name: '', email: '', referredPosition: '' });
  };

  return (
    <div className="dash-container">
      {/* Header with top-right options */}
      <header className="header">
        <h1>Job Referral Portal</h1>
        <div className="header-options">
          <button onClick={() => setActiveTab('applyJob')}>Post Job</button>
          <button onClick={() => alert('Signed out!')}>Sign Out</button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav-bar">
        <button onClick={() => setActiveTab('viewJobs')} className={activeTab === 'viewJobs' ? 'active' : ''}>Available Jobs</button>
        <button onClick={() => setActiveTab('applyJob')} className={activeTab === 'applyJob' ? 'active' : ''}>Post a Job</button>
        <button onClick={() => setActiveTab('referCandidate')} className={activeTab === 'referCandidate' ? 'active' : ''}>Refer a Candidate</button>
      </nav>

      {/* Main Content */}
      <main className="content">
        {activeTab === 'viewJobs' && (
          <div className="job-list">
            <h2>Browse Jobs</h2>
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
        )}

        {activeTab === 'applyJob' && (
          <div className="form-section">
            <h2>Post a Job</h2>
            <form onSubmit={handleJobSubmit}>
              <input type="text" placeholder="Job Title" value={jobData.title} onChange={(e) => setJobData({ ...jobData, title: e.target.value })} required />
              <input type="text" placeholder="Company" value={jobData.company} onChange={(e) => setJobData({ ...jobData, company: e.target.value })} required />
              <input type="text" placeholder="Location" value={jobData.location} onChange={(e) => setJobData({ ...jobData, location: e.target.value })} required />
              <textarea placeholder="Job Description" value={jobData.description} onChange={(e) => setJobData({ ...jobData, description: e.target.value })} required />
              <button type="submit">Submit Job</button>
            </form>
          </div>
        )}

        {activeTab === 'referCandidate' && (
          <div className="form-section">
            <h2>Refer a Friend</h2>

            <div className="job-list-referral">
              <h3>Jobs Available for Referral</h3>
              {jobs.filter(job => job.isReferralOpen).length > 0 ? (
                <ul>
                  {jobs.filter(job => job.isReferralOpen).map((job) => (
                    <li key={job.id}>
                      <strong>{job.title}</strong> at {job.company} – {job.location}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No jobs currently open for referral.</p>
              )}
            </div>

            <form onSubmit={handleReferralSubmit}>
              <input
                type="text"
                placeholder="Candidate Name"
                value={referral.name}
                onChange={(e) => setReferral({ ...referral, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Candidate Email"
                value={referral.email}
                onChange={(e) => setReferral({ ...referral, email: e.target.value })}
                required
              />
              <select
                value={referral.referredPosition}
                onChange={(e) => setReferral({ ...referral, referredPosition: e.target.value })}
                required
              >
                <option value="">Select Position</option>
                {jobs.filter(job => job.isReferralOpen).map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title} – {job.company}
                  </option>
                ))}
              </select>
              <button type="submit">Submit Referral</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dash;
