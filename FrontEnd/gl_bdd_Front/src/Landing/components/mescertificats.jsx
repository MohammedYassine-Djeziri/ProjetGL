// components/MesCertificats.jsx
import React from "react";

const Mescertificats = () => {
  const certificates = [1, 2, 3, 4]; // Example data
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      {certificates.map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between  bg-green-500 text-black px-4 py-2 rounded-2xl shadow-md"
        >
          <p>Certificat de .......................</p>
          <button className="text-green-500 hover:text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Mescertificats;
