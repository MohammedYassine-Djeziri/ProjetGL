import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function LandingTeacher() {
  const navigate = useNavigate();

  const handleSelectBar = (event) =>{
    const role = event.target.value
    if (role === "student"){
      navigate("/landingpage")
    }
    else if (role === "teacher"){
      navigate("/landingteacher")
    }
  }
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-[#002333] text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DZ Skills</h1>
        <select className="bg-white text-black px-3 py-1 rounded" value={role} onChange={handleSelectBar}>
          <option value="students">pour les étudiants</option>
          <option value="teachers">pour les enseignants</option>
        </select>
        <div className="space-x-4">
          <button className="bg-transparent border border-white px-4 py-1 rounded hover:bg-white hover:text-black" onClick={() => navigate("/login")}>
            se connecter
          </button>
          <button className="bg-green-500 px-4 py-1 rounded hover:bg-green-600" onClick={() => navigate("/signin")}>
            S'inscrire
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold">
          La <span className="text-green-500">2er</span> Plateforme
          D'Apprentissage En Ligne
        </h2>
        <p className="mt-4 text-xl">Ce que nous offrons</p>
        <div className="bg-[#003244] text-white mt-6 p-6 rounded-lg">
          <ul className="text-left space-y-4">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Des milliers de cours créatifs. De niveau débutant à pro.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Enseigné par des professionnels de la création.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Des parcours d'apprentissage pour vous aider à atteindre vos
              objectifs.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Des certificats pour célébrer vos réussites.
            </li>
          </ul>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="text-center py-10 px-4">
        <h2 className="text-2xl font-bold">
          Ce que vous obtenez avec un abonnement{" "}
          <span className="text-green-500">SKILL+</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/64"
              alt="Cours illimités"
              className="mb-2"
            />
            <p className="font-bold">Cours illimités</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/64"
              alt="Économiser de l'argent"
              className="mb-2"
            />
            <p className="font-bold">Économiser de l'argent</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/64"
              alt="Certificats illimités"
              className="mb-2"
            />
            <p className="font-bold">Certificats illimités</p>
          </div>
        </div>
        <p className="text-lg mt-4">
          Pour just <span className="font-bold">5000 DA</span> par an
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100">
        <p>© copy right preserved</p>
      </footer>
    </div>
  );
}

export default LandingTeacher;
