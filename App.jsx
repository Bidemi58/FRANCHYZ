import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import BecomeAPartner from './BecomeAPartner';
import Discounts from './Discounts';
import About from './About';
import Faq from './Faq';
import Shop from './Shop';
import ShopHeader from './ShopHeader';
import ShopFooter from './ShopFooter';
import LoginPage from './LoginPage';
import Signup from './Signup';
import Signapartner from './Signapartner';
import EmailRegPartner from './EmailRegPartner';
import MallShops from './MallShops';
import BusinessPage from './BusinessPage';
import Carting from './Carting';

import './App.css';

function AppContent() {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isSignapartnerPage = location.pathname === '/Signapartner';
  const isEmailRegPartnerPage = location.pathname === '/EmailRegPartner';
  const isMallShopsPage = location.pathname === '/MallShops'; // Corrected spelling of the variable
  const isBusinessPagePage = location.pathname.startsWith('/business/');

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="App">
      {/* Header */}
      {!isShopPage && !isLoginPage && !isSignupPage && !isSignapartnerPage && !isEmailRegPartnerPage && !isBusinessPagePage && (
        <nav className="navbar">
          <div className="logo-container">
            <Link to="/">
              <img
                src="https://github.com/Bidemi58/FRANCHYZ/raw/main/franchyz-logo-transparent.png"
                alt="Franchyz Logo"
                className="logo"
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/become-a-partner">Become a Partner</Link></li>
            <li><Link to="/discounts">Discounts</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li>
              <Link to="/shop" target="_blank" rel="noopener noreferrer">Shop</Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <Link to="/login" className="login-link" target="_blank" rel="noopener noreferrer">
              Login
            </Link>
            <a
              href={window.location.origin + '/signup'}
              target="_blank"
              rel="noopener noreferrer"
              className="signup-btn"
            >
              Sign Up
            </a>
          </div>
        </nav>
      )}

      {/* Shop Header */}
      {isShopPage && <ShopHeader />}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/become-a-partner" element={<BecomeAPartner />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Signapartner" element={<Signapartner />} />
        <Route path="/EmailRegPartner" element={<EmailRegPartner />} />
        <Route path="/MallShops" element={<MallShops />} />
        <Route path="/business/:bizName" element={<BusinessPage />} />
        <Route path="/carting" element={<Carting />} />
      </Routes>

      {/* Footer */}
      {!(isShopPage || isLoginPage || isSignupPage || isSignapartnerPage || isEmailRegPartnerPage  ) && (
        <footer className="footer">
          <div className="footer-logo">
            <img
              src="https://github.com/Bidemi58/FRANCHYZ/raw/main/franchyz-logo-transparent.png"
              alt="Franchyze Logo"
            />
          </div>
          <div className="footer-details">
            <p>
              <strong>Franchyze</strong> - Your gateway to exclusive deals and partnerships. <br />
              Find us for the latest offers and unmatched discounts.
            </p>
            <p>© 2025 Franchyze. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </footer>
      )}

      {/* Shop Footer */}
      {isShopPage && <ShopFooter />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
