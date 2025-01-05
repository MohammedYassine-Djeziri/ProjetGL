import React from 'react';
import './App.css'
import Login from './components/login.jsx'
import Signin from './components/signin.jsx'
import LandingPage from './components/landingpage.jsx'
import Landingteacher from './components/landingteacher.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pageaccstd from './components/pageaccstd.jsx';
import Pageacctch from './components/pageacctch.jsx';
import Searchcourse from './components/searchcourse.jsx';
import Coursemodules from './components/nobuycourse/coursemodules.jsx';
import Coursemodulebuy from './components/coursemodulbuycomponent/coursemodulebuy.jsx';
import Forumpage from './components/for_um/forumpage.jsx';
function LandingApp() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingteacher" element={<Landingteacher />} />
        <Route path="/pageaccstd" element={<Pageaccstd/>} />
        <Route path="/pageacctch" element={<Pageacctch/>} />
        <Route path="/searchcourse" element={<Searchcourse/>} />
        <Route path="/coursemodules" element={<Coursemodules pagetitle="Introduction to ML"/>} />
        <Route path="/coursemodulebuy" element={<Coursemodulebuy pagetitle="Introduction to ML"/>} />
        <Route path="/forumpage" element={<Forumpage/>} />
      </Routes>
    </Router>
    // <Forumpage/>
    
  
  )
}

export default LandingApp
