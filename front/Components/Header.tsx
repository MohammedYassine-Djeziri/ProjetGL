import React from "react";
import "./../styles/Header.css"; // Importer le fichier CSS associé

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">DZ Skills</div>
      <select className="select">
        <option value="students">pour les étudiants</option>
        <option value="teachers">pour les enseignants</option>
      </select>
      <div className="buttons">
        <button className="btn-login">se connecter</button>
        <button className="btn-signup">S’inscrire</button>
      </div>
    </header>
  );
};

export default Header;
