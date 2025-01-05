import React from "react";
import Forum from "./forum"; // Import the Forum component
import Coursematerial from "../coursemodulbuycomponent/coursematerial"; // Import the sidebar course material component

const Forumpage = () => {
  const moduleNames = ["module 1", "module 2", "module 3", "module 4"]; // Module names for the sidebar

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
            <button className="bg-white text-black w-full py-1 text-sm rounded-2xl hover:bg-[#00334d]">
              join the form
            </button>
          </div>
        </aside>

        {/* Forum Component */}
        <Forum />
      </div>
    </div>
  );
};

export default Forumpage;
