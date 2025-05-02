import React, { useState } from 'react';
import axios from 'axios';
import './ReferralForm.css';

function ReferralForm() {
  const [referral, setReferral] = useState({
    referredName: '',
    referredEmail: ''
  });

  const handleChange = (e) => {
    setReferral({ ...referral, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/referrals', referral);
      console.log('Referral submitted:', response.data);
      alert('Referral submitted successfully!');
      // Optionally reset the form
      setReferral({ referredName: '', referredEmail: '' });
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('Failed to submit referral.');
    }
  };

  return (
    <div className="referral-form-container">
      <h2>Submit a Referral</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="referredName"
          placeholder="Referred Person's Name"
          value={referral.referredName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="referredEmail"
          placeholder="Referred Person's Email"
          value={referral.referredEmail}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Referral</button>
      </form>
    </div>
  );
}

export default ReferralForm;
