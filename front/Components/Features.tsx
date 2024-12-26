import React from "react";
import "./../styles/Features.css";

const Features: React.FC = () => {
  return (
    <section className="features">
      <h2 className="features-title">Ce que vous obtenez avec un abonnement SKILL+</h2>
      <div className="features-grid">
        <div className="feature-item">
          <span className="icon">📚</span>
          <p>Cours illimités</p>
        </div>
        <div className="feature-item">
          <span className="icon">💰</span>
          <p>économiser de l'argent</p>
        </div>
        <div className="feature-item">
          <span className="icon">📜</span>
          <p>Certificats illimités</p>
        </div>
      </div>
      <p className="pricing">Pour just <span className="highlight">5000 Da</span> par an</p>
    </section>
  );
};

export default Features;