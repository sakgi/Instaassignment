import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/dashboard';
import Register from './component/Register'



function App() {
  return (
    <Router>
      <Routes>
        {/* Login and password routes */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/register" element={<Register  />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} /> */}
        </Routes>
        </Router>

);
}

export default App;