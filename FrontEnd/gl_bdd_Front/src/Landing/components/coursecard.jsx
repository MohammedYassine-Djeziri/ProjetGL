import React from "react";
import { useNavigate } from "react-router-dom";

const Coursecard = ({ id, title, instructor, description, image }) => {
  const navigate = useNavigate();

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
          {/* Navigate to Coursemodulebuy with dynamic data */}
          <button
            onClick={() =>
              navigate("/coursemodulebuy", {
                state: { id, title, instructor, description, image },
              })
            }
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Voir les détails
          </button>

          <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() =>
            navigate("/coursemodules", {
              state: { id, title, instructor, description, image },
            })
          }>
            Acheter maintenant
          </button>
          
          <button 
          onClick={() =>
            navigate("/pageacctch")
          }
          className="bg-[#011E3A] text-white py-2 px-4 rounded hover:bg-blue-600" >
            Voir Affiliation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coursecard;

