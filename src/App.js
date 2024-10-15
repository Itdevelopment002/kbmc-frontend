import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './responsive.css'
import './custom.css'
import './responsive-bkp.css'
import './owl.css'
import './nice-select.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
