import React from "react";
import "./../styles/HeroSection.css"; // Importer le fichier CSS associé
import Image from "next/image";
import studentImage from "./../Images/front-view-young-male-grey-t-shirt-wearing-yellow-backpack-smiling-blue-wall 1.png";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
  <div className="hero-container">
    <div className="hero-text">
      <h1 className="hero-title">
        La <span className="highlight">1ère</span> Plateforme<br />D'Apprentissage<br />En Ligne
      </h1>
    </div>

    <div className="hero-image">
      <Image src={studentImage} alt="Étudiant" />
    </div>
  </div>

  <div className="hero-content">
    <ul className="hero-list">
      <li>Des milliers de cours créatifs. De niveau débutant à pro.</li>
      <li>Enseigné par des professionnels de la création.</li>
      <li>Des parcours d'apprentissage pour atteindre vos objectifs.</li>
      <li>Des certificats pour célébrer vos réussites.</li>
    </ul>
  </div>
</section>

  );
};

export default HeroSection;
