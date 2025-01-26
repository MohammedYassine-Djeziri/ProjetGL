import React from "react";
import Teacher from "./../photos/Teacher.png";
import { FaDollarSign, FaBookOpen, FaCertificate } from "react-icons/fa"; // Import des icônes

const LandingPageT = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative bg-[#011E3A] text-white py-4 px-6 flex justify-between items-center shadow-md">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">DZ Skills</h1>

        {/* Bouton "Pour Enseignant" au centre */}
        <a href="/">
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white text-white py-2 px-6 rounded-xl hover:bg-white hover:text-[#011E3A] transition duration-300">
            Pour Etudiant
          </button>
        </a>

        {/* Navigation droite avec "Se connecter" et "S'inscrire" */}
        <nav className="flex items-center space-x-6">
          <a href="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg">
              Se connecter
            </button>
          </a>
          <a href="/register">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg">
              S'inscrire
            </button>
          </a>
        </nav>
      </header>

      {/* Section principale */}
      <section className="py-16 px-4 bg-gray-100 flex-grow">
        <div className="container mx-auto">
          {/* Colonne supérieure : Titre et image */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Image à gauche */}
            <div className="flex-1 text-center lg:text-left">
              <img
                src={Teacher}
                alt="Apprentissage en ligne"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 max-w-lg mx-auto lg:mx-0"
              />
            </div>

            {/* Texte à droite */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-6xl font-extrabold leading-tight">
                Créez et <span className="text-green-500">Partagez</span> Vos Cours en Toute Simplicité
              </h2>
              <p className="mt-6 text-2xl font-semibold text-gray-700">
                Rejoignez notre communauté dynamique et boostez vos revenus, à votre rythme.
              </p>
            </div>
          </div>

          {/* Liste des fonctionnalités */}
          <div
            id="features"
            className="bg-[#003244] text-white p-8 rounded-lg shadow-xl"
          >
            <ul className="space-y-6 text-lg">
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✔</span>
                Créez des cours interactifs et adaptés à tous les niveaux
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✔</span>
                Créez des Quiz et exercices pour chaque cours
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✔</span>
                Suivez les progrès de vos élèves en temps réel
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✔</span>
                Monétisez votre contenu
              </li>
            </ul>
          </div>

          {/* Nouvelle section SKILL+ */}
          <section className="my-16 text-center">
            <h2 className="text-4xl font-bold mb-6">Ce Que Vous Bénéficiez de Cette Plateforme</h2>
            <div className="flex justify-center gap-16 mb-6">
              {/* Cours illimités */}
              <div className="text-center flex flex-col items-center">
                <FaBookOpen className="text-6xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold">Bâtir Sa Réputation</h3>
              </div>
              {/* Économisez de l'argent */}
              <div className="text-center flex flex-col items-center">
                <FaDollarSign className="text-6xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold">Gagner de l'argent</h3>
              </div>
              {/* Certificats illimités */}
              <div className="text-center flex flex-col items-center">
                <FaCertificate className="text-6xl text-green-500 mb-4" />
                <h3 className="text-xl font-semibold">Enseigner à Votre Rythme</h3>
              </div>
            </div>
            <p className="text-xl font-semibold">Pas de Frais, sans Carte de Crédit</p>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#011E3A] text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Section 1 : Navigation */}
          <div>
            <h3 className="font-bold text-xl mb-6">Explorez</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="hover:text-green-500 text-lg">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-500 text-lg">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500 text-lg">
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2 : À propos */}
          <div>
            <h3 className="font-bold text-xl mb-6">À propos</h3>
            <p className="text-base">
              DZ Skills révolutionne l'apprentissage en ligne en rendant l'éducation accessible à tous, partout et tout le temps.
            </p>
          </div>

          {/* Section 3 : Contact */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contactez-nous</h3>
            <p className="text-base">Adresse : 123 Rue de l'Éducation, Alger</p>
            <p className="text-base">Email : contact@dzskills.com</p>
            <p className="text-base">Téléphone : +213 555 123 456</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            © {new Date().getFullYear()} DZ Skills. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageT;
