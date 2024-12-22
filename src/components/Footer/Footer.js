// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Questions? Call 911-911-1911</p>
        <ul className="footer-links">
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Help Center</a></li>
          <li><a href="/">Account</a></li>
          <li><a href="/">Media Center</a></li>
          <li><a href="/">Investor Relations</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Ways to Watch</a></li>
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Cookie Preferences</a></li>
          <li><a href="/">Corporate Information</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">Speed Test</a></li>
          <li><a href="/">Legal Notices</a></li>
          <li><a href="/">Netflix Originals</a></li>
        </ul>
        <p className="footer-country">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
