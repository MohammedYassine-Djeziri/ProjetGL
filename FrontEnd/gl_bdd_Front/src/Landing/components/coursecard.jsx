import React from "react";

const Coursecard = ({ title, instructor, description, image }) => {
  return (
    <div className="bg-green-500 flex flex-col md:flex-row items-center md:items-start p-4 rounded-lg shadow-lg gap-4 mb-6">
      {/* Image Section */}
      <div className="w-full md:w-1/4">
        <img
          src={image}
          alt="Course"
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 items-start">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-black">Titel: {title}</h2>
          <p className="text-sm text-gray-800 mt-2">
            L'enseignant : <span className="font-semibold">{instructor}</span>
          </p>
          <p className="mt-4 text-gray-700 text-sm">{description}</p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Voir les détails
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Acheter maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coursecard;
