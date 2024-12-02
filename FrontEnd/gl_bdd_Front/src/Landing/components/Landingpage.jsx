import React from 'react';
import Header from './header'; // Adjust the path based on your project structure
import './main.css'; // Styling for Main, if any

const Landingpage = () => {
  return (
    <div>
      <Header /> 
      <main className="main">
        <section className="hero">
          <h2>
            La <span className="highlight">1ère</span> Plateforme D’Apprentissage En Ligne
          </h2>
          <p className="offer-title">Ce que nous offrons</p>
          <ul className="features-list">
            <li>Des milliers de cours créatifs. De niveau débutant à pro.</li>
            <li>Enseigné par des professionnels de la création.</li>
            <li>Des parcours d’apprentissage pour vous aider à atteindre vos objectifs.</li>
            <li>Des certificats pour célébrer vos réussites.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Landingpage;
