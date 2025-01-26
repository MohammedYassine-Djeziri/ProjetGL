import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


export default function SearchResults() {
  const [courses, setCourses] = useState(data);

  return (
    <div className="flex flex-col  justify-start min-h-screen w-full bg-primary ">
      <TopBarExpert />
      <div className="flex flex-col items-center justify-start w-full h-full bg-primary gap-4 p-6">
        <h3 className="text-2xl font-semibold text-white w-full underline">
          voici les resultas:
        </h3>
        <div className="flex flex-col gap-4 w-[90%] items-center">
          {courses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  const navigate = useNavigate();

  const onOpen = () => {
    navigate("/course-client");
  };

  return (
    <div className="flex items-center justify-evenly gap-2 p-4 rounded-3xl bg-gradient-to-b from-[#00FF84] to-[#FFFFFF] border-5 border-white ">
      <div className="flex flex-col gap-2 h-full max-w-[50%]">
        <p className="font-bold text-2xl">Title: {course.title}</p>
        <p className="font-semibold text-xl">L’ensegnent :{course.teacher}</p>
        <p className="font-bold text-2xl">Description</p>
        <p className="text-semibold text-xl"> {course.description}</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <a href="/course-expert/afiliate-example">
          <Button
            radius="lg"
            className=" bg-gray-700 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
          // onClick={onOpen}
          >
            generer un lien d’affiation
          </Button>
        </a>
        <Button
          radius="lg"
          className=" bg-red-500 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
          onPress={onOpen}
        >
          Voir les detailes
        </Button>
        {/* <Button
          radius="lg"
          className=" bg-blue-500 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
          // onClick={onOpen}
        >
          Acheter mentenant
        </Button> */}
      </div>
      <img
        src={course.thembnail}
        alt="course"
        className="h-[270px] w-[230px] rounded-2xl"
      ></img>
    </div>
  );
}
