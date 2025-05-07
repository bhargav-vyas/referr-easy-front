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
      {/* Header */}
      <header className="header">
        <h1>Job Referral Portal</h1>
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
            <form onSubmit={handleReferralSubmit}>
              <input type="text" placeholder="Name" value={referral.name} onChange={(e) => setReferral({ ...referral, name: e.target.value })} required />
              <input type="email" placeholder="Email" value={referral.email} onChange={(e) => setReferral({ ...referral, email: e.target.value })} required />
              <input type="text" placeholder="Referred Position" value={referral.referredPosition} onChange={(e) => setReferral({ ...referral, referredPosition: e.target.value })} required />
              <button type="submit">Submit Referral</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dash;
