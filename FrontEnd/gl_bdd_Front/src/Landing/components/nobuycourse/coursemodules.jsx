import React from "react";
import Modulecontentnobuy from "./modulecontentnobuy"; // Import the dynamic ModuleContent component
import Coursematerial from "../coursemodulbuycomponent/coursematerial"; // Import the new CourseMaterial component
import { useNavigate } from "react-router-dom";

const Coursemodules = ({pagetitle}) => {
const navigate = useNavigate()
  // Dynamic Data
  const moduleTitle = "Le contenu de module"; // Module title
  const courseTitles = ["Introduction to Machine Learning", "Deep Learning Basics"]; // Course titles
  const quizTitles = ["Quiz 1: Fundamentals", "Quiz 2: Neural Networks"]; // Quiz titles
  const moduleNames = ["Module 1: Basics", "Module 2: Intermediate", "Module 3: Advanced", "Module 4: Expert"]; // Module names for the sidebar

  return (
    <div className="bg-white min-h-screen text-white">
      {/* Header */}
      <header className="bg-[#002333] text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DZ Skills</h1>
        <input
          type="text"
          placeholder="chercher des cours"
          className="p-2 rounded w-1/2 md:w-1/3 text-black"
        />
        <button className="bg-green-500 px-4 py-1 text-sm rounded hover:bg-green-600">
          profile
        </button>
      </header>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row mt-4 px-4">
        {/* Sidebar */}
        <aside className="bg-[#0EB582] w-full md:w-1/5 min-h-screen p-4 rounded-md md:mr-4">
          {/* Sidebar Image */}
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/300x200" // Replace with your image URL
              alt="Course Material"
              className="rounded-md w-full"
            />
          </div>

          {/* Course Material Component */}
          <Coursematerial modules={moduleNames} />

          {/* Join Form Button */}
          <div>
            <button 
            onClick={() =>
              navigate("/forumpage")
            }
            className="bg-white text-black w-full py-1 text-sm rounded-2xl hover:bg-[#00334d]">
              join the form
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-[#002333] p-6 rounded-md shadow-md">
          {/* Page Title */}
          <h1 className="text-2xl font-bold mb-4 text-left text-white">
          {pagetitle}
          </h1>

          {/* Module Content Component with Dynamic Data */}
          <Modulecontentnobuy
            title={moduleTitle}
            courseTitles={courseTitles}
            quizTitles={quizTitles}
          />
        </main>
      </div>
    </div>
  );
};

export default Coursemodules;
