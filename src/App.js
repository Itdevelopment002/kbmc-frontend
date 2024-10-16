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
import PropertyHolder from './components/PropertHolder/PropertyHolder';
import MunicipalProperties from './components/MunicipalProperties/MunicipalProperties';
import Schools from './components/Schools/Schools';
import Gardens from './components/Gardens/Gardens';
import Electric from './components/Electric/Electric';
import Roads from './components/Roads/Roads';
import TreeCensus from './components/TreeCensus/TreeCensus';
import Health from './components/Health/Health';
import PondsTalao from './components/PondsTalao/PondsTalao';
import FireStation from './components/FireStation/FireStation';
import PrivateHospital from './components/PrivateHospital/PrivateHospital';
import Awards from './components/Awards/Awards';
import PreviousPresidents from './components/PreviousPresidents/PreviousPresidents';
import PreviousChiefOfficers from './components/PreviousChiefOfficers/PreviousChiefOfficers';
import Departments from './components/Departments/Departments';
import Functions from './components/Functions/Functions';
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
        <Route path="/history" element={<History />} />
        <Route path="/ward" element={<Wards />} />
        <Route path="/electedwing" element={<ElectedWing />} />
        <Route path="/organisationstructure" element={<OrganisationStructure />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/elected-pre-officer" element={<PreviousChiefOfficers />} />
        <Route path="/elected-pre-representative" element={<PreviousPresidents />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/property-holder" element={<PropertyHolder />} />
        <Route path="/properties_milkat" element={<MunicipalProperties />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/gardens" element={<Gardens />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/roads" element={<Roads />} />
        <Route path="/tree-census" element={<TreeCensus />} />
        <Route path="/health" element={<Health />} />
        <Route path="/ponds-talao" element={<PondsTalao />} />
        <Route path="/fire-station" element={<FireStation />} />
        <Route path="/private-hospital" element={<PrivateHospital />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <WhatsAppChat />
      <Footer />
    </Router>
  );
}

export default App;
