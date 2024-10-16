import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import MainHome from './components/MainHome/MainHome';
import History from './components/History/History';
import Wards from './components/Wards/Wards';
import ElectedWing from './components/ElectedWing/ElectedWing';
import OrganisationStructure from './components/OrganisationStructure/OrganisationStructure';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainHome />} />
     <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/history" element={<History />} />
        <Route path="/ward" element={<Wards />} />
        <Route path="/electedwing" element={<ElectedWing />} />
        <Route path="/organisationstructure" element={<OrganisationStructure />} />



      </Routes>
      <ScrollToTop />
      <WhatsAppChat />
      <Footer />
    </Router>
  );
}

export default App;
