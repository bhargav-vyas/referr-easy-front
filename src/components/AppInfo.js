// AppInfo.js
import React from 'react';

const AppInfo = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e6f2ff', borderRadius: '10px', marginTop: '20px' }}>
      <h2>About the Referral Application</h2>
      <p>
        Welcome to the <strong>Referral Application</strong> — a platform designed to connect job seekers with 
        employees working in top MNCs (Multi-National Companies) for professional referrals.
      </p>

      <h3>🎯 Purpose</h3>
      <p>
        The main goal of this application is to simplify and speed up the referral process. Whether you're an experienced 
        professional or a fresher, getting a referral from someone inside the company significantly boosts your chances 
        of being shortlisted.
      </p>

      <h3>🔑 Key Features</h3>
      <ul>
        <li>Register and create your professional profile.</li>
        <li>Browse available companies and positions accepting referrals.</li>
        <li>Connect with employees willing to refer candidates.</li>
        <li>Track the status of your referral requests.</li>
        <li>Get notified when your referral is submitted.</li>
      </ul>

      <h3>🤝 How It Works</h3>
      <ol>
        <li>Create an account and complete your profile with resume and skills.</li>
        <li>Search for companies and available roles.</li>
        <li>Send referral requests to verified employees.</li>
        <li>Receive confirmation once the referral is submitted.</li>
        <li>Use the application to track progress and get interview updates.</li>
      </ol>

      <p>
        This system is built to ensure transparency, simplicity, and faster communication between candidates and 
        employees. Let your talent speak — with a strong referral!
      </p>
    </div>
  );
};

export default AppInfo;
