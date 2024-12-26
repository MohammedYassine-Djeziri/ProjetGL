import React from "react";

const Modulecontentbuy = ({ title, courseTitles, quizTitles }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mx-auto max-w-4xl">
      {/* Title */}
      <h2 className="text-lg font-bold mb-4 text-center text-black">
        {title}
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Courses */}
        <div>
          <h3 className="font-bold mb-2 text-black">les cours:</h3>
          <ul className="space-y-2 list-disc pl-5 text-black">
            {courseTitles.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>

        {/* Right Column: Quizzes */}
        <div>
          <h3 className="font-bold mb-2 text-black">les quiz:</h3>
          <ul className="space-y-2 list-disc pl-5 text-black">
            {quizTitles.map((quiz, index) => (
              <li key={index}>{quiz}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-6">
        <button
        onClick={() =>
        navigate("/coursemodule", {
        state: { id, title, instructor, description, image },
        })}
        className="bg-blue-600 text-white px-4 py-2 text-sm rounded-2xl hover:bg-[#00334d]">
          Acheter Maintenant
        </button>
      </div>
    </div>
  );
};

export default Modulecontentbuy;
