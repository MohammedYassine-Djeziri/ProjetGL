import React from 'react';
import './App.css'
import Login from './components/login.jsx'
import Signin from './components/signin.jsx'
import LandingPage from './components/landingpage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function LandingApp() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    
    
  
  )
}

export default LandingApp
