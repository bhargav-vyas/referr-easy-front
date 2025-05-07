import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dash.css';

function Dash() {
  const [activeTab, setActiveTab] = useState('applyJob');

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

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/job/getAll');
      setJobs(res.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

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
    console.log('Referral submitted:', referral);
    alert('Referral submitted successfully!');
    setReferral({ name: '', email: '', referredPosition: '' });
  };

  return (
    <div className="dashboard">
      <h1>Job Dashboard</h1>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        <button onClick={() => setActiveTab('applyJob')}>Apply Job</button>
        <button onClick={() => setActiveTab('referCandidate')}>Refer Candidate</button>
        <button onClick={() => setActiveTab('viewJobs')}>View All Jobs</button>
      </div>

      {/* Section: Apply Job */}
      {activeTab === 'applyJob' && (
        <div className="section">
          <h2>Apply for a Job</h2>
          <form onSubmit={handleJobSubmit}>
            <input
              type="text"
              placeholder="Job Title"
              value={jobData.title}
              onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Company"
              value={jobData.company}
              onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={jobData.location}
              onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              value={jobData.description}
              onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
              required
            />
            <button type="submit">Post Job</button>
          </form>
        </div>
      )}

      {/* Section: Refer Candidate */}
      {activeTab === 'referCandidate' && (
        <div className="section">
          <h2>Refer a Candidate</h2>
          <form onSubmit={handleReferralSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={referral.name}
              onChange={(e) => setReferral({ ...referral, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={referral.email}
              onChange={(e) => setReferral({ ...referral, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Referred Position"
              value={referral.referredPosition}
              onChange={(e) => setReferral({ ...referral, referredPosition: e.target.value })}
              required
            />
            <button type="submit">Submit Referral</button>
          </form>
        </div>
      )}

      {/* Section: View Jobs */}
      {activeTab === 'viewJobs' && (
        <div className="section">
          <h2>Available Jobs</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <strong>{job.title}</strong> at {job.company} in {job.location}
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dash;
