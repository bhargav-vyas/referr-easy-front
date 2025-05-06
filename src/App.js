import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Register from './components/Register';
import Login from './components/Login';
import ReferralForm from './components/ReferralForm';
import Dashboard from './components/Dashboard';
import AppInfo from './components/AppInfo'; // ✅ Make sure this path is correct
import SignUp from './components/Signup';
import dash from './components/dash'; // ✅ Make sure this path is correct
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/referral" element={<ReferralForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
       <Route path='/dash' element={<dash/>}/>
       <Route path="/signup" element={<SignUp />} /> {/* ✅ Added this line */}
        <Route path="/info" element={<AppInfo />} /> {/* ✅ Added this line */}
      </Routes>
    </Router>
  );
}

export default App;
