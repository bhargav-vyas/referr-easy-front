import React, { useState } from 'react';
import axios from 'axios';
import './PostJob.css';

function PostJob() {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    location: '',
    company: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/job/create', jobData);
      alert('Job posted successfully!');
      setJobData({ title: '', description: '', location: '', company: '' });
    } catch (error) {
      alert('Error posting job.');
    }
  };

  return (
    <div className="post-job-container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit} className="job-form">
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
          placeholder="Job Description"
          value={jobData.description}
          onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
          required
        />
        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
}

export default PostJob;
