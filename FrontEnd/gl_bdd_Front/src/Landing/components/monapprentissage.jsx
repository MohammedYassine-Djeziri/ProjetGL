// components/MonApprentissage.jsx
import React from "react";

const Monapprentissage = () => {
  const courses = [1, 2, 3]; // Example data
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {courses.map((_, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-2xl shadow-md overflow-hidden border-green-500 "
        >
          <img
            src="https://via.placeholder.com/300x150"
            alt="Course Thumbnail"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="font-bold">Title: .......................</h4>
            <p className="text-gray-600 text-sm">last view part: ....</p>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-1/4"></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Progress: 25%</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Monapprentissage;
