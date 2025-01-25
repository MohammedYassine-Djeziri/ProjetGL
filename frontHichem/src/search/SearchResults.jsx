import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { useState } from "react";
import { Button } from "@nextui-org/react";

//fetching the data from the backend
const data = [
  {
    id: 1,
    title: "Cours de React",
    teacher: "Mohamed",
    image: "https://blog.ippon.fr/content/images/2016/04/react-javascript.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
  },
  {
    id: 2,
    title: "Cours de Django",
    teacher: "Mohamed",
    image:
      "https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
  },
  {
    id: 3,
    title: "Cours de Python",
    teacher: "Mohamed",
    image:
      "https://digital.hec.ca/wp-content/uploads/2024/11/0_QR-44Cl9I4Y7pUYQ-1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
  },
  {
    id: 4,
    title: "Cours de Django",
    image:
      "https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
  },
];

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
          // onClick={onOpen}
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
        src={course.image}
        alt="course"
        className="h-[270px] w-[230px] rounded-2xl"
      ></img>
    </div>
  );
}
