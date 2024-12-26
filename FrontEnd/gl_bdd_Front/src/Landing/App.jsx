import React from 'react';
import './App.css'
import Login from './components/login.jsx'
import Signin from './components/signin.jsx'
import LandingPage from './components/landingpage.jsx'
import Landingteacher from './components/landingteacher.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pageaccstd from './components/pageaccstd.jsx';
import Searchcourse from './components/searchcourse.jsx';
function LandingApp() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingteacher" element={<Landingteacher />} />
        <Route path="/pageaccstd" element={<Pageaccstd/>} />
        <Route path="/searchcourse" element={<Searchcourse/>} />
      </Routes>
    </Router>
    
    
  
  )
}

export default LandingApp
