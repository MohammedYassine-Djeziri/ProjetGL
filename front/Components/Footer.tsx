import React from "react";
import "./../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-text">copy right preserved</p>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Quick Link</h4>
          <p>Home</p>
          <p>Blog Post</p>
        </div>
        <div className="footer-column">
          <h4>Get In Touch</h4>
          <p>About Us</p>
        </div>
        <div className="footer-column">
          <h4>Address</h4>
          <p>4517 El Kseur, Bejaia, Amizour</p>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>🐦</span>
            <span>📷</span>
            <span>📌</span>
            <span>▶</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;