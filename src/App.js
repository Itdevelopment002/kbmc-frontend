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
import Footer from './components/Footer/Footer';
import WhatsAppChat from './components/WhatsAppChat/WhatsAppChat';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <WhatsAppChat />
      <Footer />
    </Router>
  );
}

export default App;
