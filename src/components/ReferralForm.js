import React, { useState } from 'react';
import './ReferralForm.css';

function ReferralForm() {
  const [referral, setReferral] = useState({ referredName: '', referredEmail: '' });

  const handleChange = (e) => {
    setReferral({...referral, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Referral form data:', referral);
    // Later: Axios POST to send referral to backend
  };
return (
  <div className="referral-form-container">
    <h2>Submit a Referral</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="referredName"
        placeholder="Referred Person's Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="referredEmail"
        placeholder="Referred Person's Email"
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Referral</button>
    </form>
  </div>
);

}

export default ReferralForm;
