import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Register from './components/Register';
import Login from './components/Login';
import ReferralForm from './components/ReferralForm';
import Dashboard from './components/Dashboard';
import AppInfo from './components/AppInfo';
import SignUp from './components/Signup';
import Dash from './components/Dash';
import PostJobForm from './components/PostJobForm';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/referral" element={<ReferralForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Dash" element={<Dash />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/info" element={<AppInfo />} />
        <Route path="/post-job" element={<PostJobForm />} />
        <Route path="/post-job" element={<PostJobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
