import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import play_circle from "../assets/play_circle.svg";
import assignment_turned_in from "../assets/assignment_turned_in.svg";
import library_books from "../assets/library_books.svg";

//from the backend
const datat = {
  id: 1,
  title: "Course in data science",
  modules: ["Module 1", "Module 2", "Module 3", "Module 4"],
  cours: [
    { title: "cours 1", type: "text", id: 1 },
    { title: "cours 2", type: "video", id: 2 },
  ],
  quiz: [
    { title: "quiz 1", type: "", id: 1 },
    { title: "quiz 2", type: "", id: 2 },
  ],
  baught: false,
};

export default function CourseClient() {
  const [data, setData] = useState(datat);
  const [baught, setBaught] = useState(datat.baught);
  return (
    <div className="flex flex-col  justify-start min-h-screen w-full ">
      <TopBarExpert />
      <div className="flex  w-full h-full  gap-4 p-4">
        <div className=" h-full w-[15%] bg-secondary min-h-[85vh] flex flex-col items-center p-4 gap-7 ">
          <img
            src="https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg"
            alt="logo"
            className=" rounded-xl h-24"
          />
          <Material modules={data?.modules} />
        </div>
        <div className=" h-full w-full bg-primary min-h-[85vh] flex flex-col items-center justify-start p-5 gap-4">
          <div className="flex w-full justify-between items-center">
            <h3 className=" underline text-white text-2xl font-semibold w-full">
              {data.title}
            </h3>
          </div>
          <div className="flex flex-col gap-4 items-center bg-white p-4 rounded-xl min-h-[50vh] w-[90%]">
            <h2 className=" text-xl font-bold">le contenu de module</h2>
            <div className="flex w-[90%] gap-6 flex-wrap justify-center ">
              <div className="flex flex-col gap-4 items-center w-[30%]">
                <h3 className="text-xl w-full font-semibold pb-2 border-b-3 border-black">
                  le cours :
                </h3>
                {data?.cours?.map((course, index) => (
                  <CourseItem course={course} key={index} />
                ))}
              </div>
              <div className="flex flex-col gap-4 items-center w-[30%]">
                <h3 className="text-xl w-full font-semibold pb-2 border-b-3 border-black">
                  les quiz :
                </h3>
                {data?.quiz?.map((quiz, index) => (
                  <CourseItem course={quiz} key={index} />
                ))}
              </div>
            </div>
            {!baught && (
              <Button
                onPress={() => setBaught(true)}
                radius="lg"
                className=" bg-blue-500 min-w-[150px] font-semibold border-white text-white border-3 shadow-large mt-20"
              >
                Acheter mentenant
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Material({ modules }) {
  return (
    <div className="flex flex-col gap-2 items-center bg-white p-2 rounded-xl">
      <h2 className=" text-xl font-semibold">Course Material</h2>
      <div className="flex flex-col gap-1 items-center">
        {modules.map((module, index) => (
          <div
            key={index}
            className="flex items-center gap-1 justify-between w-full  rounded-xl"
          >
            {/* to be changed with a check box , the values of the check box are taken from & in the link :) */}
            <div className=" bg-gray-300 rounded-full w-5 h-5"></div>
            <p>{module}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CourseItem({ course }) {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex gap-2 items-center">
        <img
          src={
            course.type === "text"
              ? library_books
              : course.type === "video"
              ? play_circle
              : assignment_turned_in
          }
          alt="lgg"
          className=" w-5 h-5"
        />
        <a href="#" className="">
          {course.title}
        </a>
      </div>
    </div>
  );
}
