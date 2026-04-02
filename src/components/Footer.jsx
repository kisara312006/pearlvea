import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Camera, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <img src="/logofull.png" alt="PearlVea Logo" style={{ maxWidth: '180px', height: 'auto', marginBottom: '1rem', objectFit: 'contain' }} />
          <p>Elegance in Every Pearl. Discover our premium collection of pearl bags and purses.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#"><Mail size={20} /></a>
            <a href="#"><Camera size={20} /></a>
            <a href="#"><MessageCircle size={20} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PearlVea. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
