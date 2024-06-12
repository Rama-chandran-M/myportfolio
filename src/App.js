import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Certificates from './Certificates';
import Internships from './Internships';
import Projects from './Projects';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <h1>Ramachandran M</h1>
          </div>
          <div className="navbar-right">
            <Link to="/">About Me</Link>
            <Link to="/certificates">Certificates</Link>
            <Link to="/internships">Internships</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
