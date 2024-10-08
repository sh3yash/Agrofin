import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import LoginPage from './pages/LoginPage';

import ContactUsPage from './pages/ContactUsPage';
import HomePage from './pages/HomePage';
import TradingPlatform from './pages/TradingPlatform';
import 'bootstrap/dist/css/bootstrap.min.css';
import Consultation from './pages/Consultation';
import Chat from './pages/AIChat';
import ConsultPage from './pages/ConsultPage';
import AdvisorChat from './pages/AdvisorChat';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />


          <Route path="/tradingplatform" element={<TradingPlatform />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/consultation" element={<Consultation/>} />
          <Route path="/chat" element={<Chat/>} />  
          <Route path="/consultpage" element={<ConsultPage/>} />  
          <Route path="/advisorchat" element={<AdvisorChat/>} />     
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
