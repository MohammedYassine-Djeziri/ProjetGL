import React from 'react';
import './header.css'; // For styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>DZ Skills</h1>
        <span>pour les étudiants</span>
      </div>
      <div className="auth-buttons">
        <button className="login-btn">se connecter</button>
        <button className="signup-btn">S’inscrire</button>
      </div>
    </header>
  );
};

export default Header;
