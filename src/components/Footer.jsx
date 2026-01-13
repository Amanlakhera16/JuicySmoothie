import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-about">
          <h3>🍹 Fresh Juices & Smoothies</h3>
          <p>
            We serve fresh, healthy, and delicious juices and smoothies
            made from the finest ingredients. Your daily boost of energy and
            wellness in every sip!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><Phone fontSize="small" /> +1 234 567 890</p>
          <p><Email fontSize="small" /> info@freshjuices.com</p>
          <p>123 Juice Street, Smoothie City, USA</p>

          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Fresh Juices & Smoothies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
