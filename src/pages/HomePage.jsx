import React, { useState } from 'react';
import './HomePage.css';
import { FaQuoteLeft } from 'react-icons/fa';
import AdvisorChat from './AdvisorChat';
import AIChat from './AIChat';
import Spline from '@splinetool/react-spline';

const HomePage = () => {
  const [showAdvisorChat, setShowAdvisorChat] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  const openAdvisorChat = () => {
    setShowAdvisorChat(true);
    setShowAIChat(false);
  };

  const openAIChat = () => {
    setShowAIChat(true);
    setShowAdvisorChat(false);
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        {/* Spline Component as the background */}
        <Spline scene="https://prod.spline.design/kvCimAJ9veX72BIG/scene.splinecode" />
        <div className="hero-content">
          <h1>Welcome to Agri-Finance Platform</h1>
          <p>Your trusted partner in agricultural financial growth and success.</p>

          <div className="buttons">
            <button className="btn-appointment" onClick={openAdvisorChat}>
              Chat with Advisor
            </button>
            <button className="btn-chat" onClick={openAIChat}>
              Chat with AI
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="section why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Expert Advice</h3>
            <p>Get insights from industry experts with years of experience in agriculture and finance.</p>
          </div>
          <div className="card">
            <h3>Tailored Solutions</h3>
            <p>We customize financial solutions based on your specific needs to help you grow.</p>
          </div>
          <div className="card">
            <h3>Proven Results</h3>
            <p>Our clients have seen a 30% increase in agricultural output after working with us.</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="section about-section">
        <h2>About Us</h2>
        <div className="about-content">
          <p>
            Agri-Finance Platform is dedicated to empowering farmers by providing tailored financial solutions. We believe in using our expertise in
            finance and agriculture to help you grow your farming business. Our team of experts is always here to provide guidance, support, and
            innovative solutions for a better agricultural future.
          </p>
          <p>
            Founded in 2020, we have helped thousands of farmers manage their finances effectively, secure loans, and access the latest agricultural technologies.
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="section events-section">
        <h2>Upcoming Events</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Agri-Tech Conference</h3>
            <p>Join us for an in-depth look at the latest agricultural technologies and how they can benefit your farm.</p>
            <p><strong>Date:</strong> 10th October 2024</p>
          </div>
          <div className="card">
            <h3>Financial Planning Webinar</h3>
            <p>Learn how to manage your finances effectively with insights from our top financial advisors.</p>
            <p><strong>Date:</strong> 15th November 2024</p>
          </div>
          <div className="card">
            <h3>Farmers' Community Meet</h3>
            <p>Connect with other farmers and industry professionals to exchange ideas and solutions.</p>
            <p><strong>Date:</strong> 5th December 2024</p>
          </div>
        </div>
      </div>

      {/* What Our Clients Say Section */}
      <div className="section testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"This platform has helped me secure the loans I needed to expand my farm."</p>
            <p>- Farmer John</p>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"Their advice on financial planning saved me during tough seasons."</p>
            <p>- Farmer Sarah</p>
          </div>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"I was able to invest in new technology and improve my farm’s productivity."</p>
            <p>- Farmer Mike</p>
          </div>
        </div>
      </div>

      {/* Conditional rendering of the Chat components */}
      {showAdvisorChat && <AdvisorChat />}
      {showAIChat && <AIChat />}
    </div>
  );
};

export default HomePage;
