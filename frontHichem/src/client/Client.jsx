import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { Progress } from "@nextui-org/react";
import { useState } from "react";
import download from "../assets/download.svg";
import check_circle from "../assets/check_circle.svg";

//to be fetched from the backend
const data = {
  cours: [
    {
      id: 1,
      title: "Cours de React",
      progress: 30,
      image:
        "https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg",
    },
    {
      id: 2,
      title: "Cours de React",
      progress: 70,
      image:
        "https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg",
    },
    {
      id: 3,
      title: "Cours de React",
      progress: 56,
      image:
        "https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg",
    },
  ],
  certificate: [
    { name: "Maths" },
    { name: "Data Science" },
    { name: "React" },
    { name: "Gl" },
  ],
};

export default function Client() {
  const [courses, setCourses] = useState(data.cours);
  const [certificates, setCertificates] = useState(data.certificate);

  return (
    <div className="flex flex-col  justify-start min-h-screen w-full bg-primary ">
      <TopBarExpert />
      <div className="flex flex-col  justify-start w-full h-full bg-primary gap-8 p-6">
        <h1 className="text-white text-2xl font-bold">Page d’accueil</h1>
        <h1 className=" w-full text-white text-xl border-b-1 font-bold pb-4">
          Mon apprentissage
        </h1>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {courses.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
        <h1 className=" w-full text-white text-xl border-b-1 font-bold pb-4">
          Mes certificats
        </h1>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {certificates.map((certificat, index) => (
            <Certificat certificat={certificat} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white p-4 text-lg rounded-3xl">
      <img
        src={course.image}
        alt="course"
        className="w-[300px] h-[120px] rounded-2xl"
      />
      <div className="w-full flex flex-col justify-center gap-1">
        <h1 className="  font-semibold">Titel: {course.title}</h1>
        <p className="">
          {" "}
          Last view part :{" "}
          <span className="text-orange-400">{course.studentsNumber}</span>
        </p>
      </div>
      <p className="font-semibold w-full">Progress :</p>
      <div className="w-full flex gap-2 items-center">
        <p className="text-nowrap">{course.progress} %</p>
        <Progress
          color="success"
          aria-label="Loading..."
          className="max-w-md"
          value={course.progress}
        />
      </div>
    </div>
  );
}

function Certificat({ certificat }) {
  return (
    <div className="flex justify-between px-2 w-[40%] bg-secondary items-center rounded-xl">
      <div className="flex items-center gap-2">
        <img src={check_circle} alt="check" />
        <p className="font-bold text-xl">certificat de {certificat.name}</p>
      </div>
      <img src={download} alt="download" className="cursor-pointer" />
    </div>
  );
}
