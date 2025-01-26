import React from "react";
import TopBarExpert from "./components/TopBar";
import { Button, Modal, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import DeletePop from "./components/DeletePop";

//to be fetched from the backend
const data = [
  {
    id: 1,
    title: "Cours de React",
    studentsNumber: 100,
    genratedProfit: 1000,
    image: "https://blog.ippon.fr/content/images/2016/04/react-javascript.png",
  },
  {
    id: 2,
    title: "Cours de Django",
    studentsNumber: 70,
    genratedProfit: 2500,
    image:
      "https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg",
  },
  {
    id: 3,
    title: "Cours de Python",
    studentsNumber: 50,
    genratedProfit: 500,
    image:
      "https://digital.hec.ca/wp-content/uploads/2024/11/0_QR-44Cl9I4Y7pUYQ-1.jpg",
  },
  {
    id: 4,
    title: "Cours de Django",
    studentsNumber: 70,
    genratedProfit: 2500,
    image:
      "https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg",
  },
];

export default function Expert() {
  const [courses, setCourses] = useState(data);

  return (
    <div className="flex flex-col  justify-start min-h-screen w-full bg-primary ">
      <TopBarExpert />
      <div className="flex flex-col  justify-start w-full h-full bg-primary gap-4 p-6">
        <h1 className="text-white text-2xl font-bold">
          Page d’accueil d’expert
        </h1>
        <Button
          radius="lg"
          className=" bg-secondary text-white max-w-[150px] font-semibold border-white border-3"
        >
          apprentisage
        </Button>
        <h1 className=" w-full text-white text-xl border-b-1 font-bold pb-4">
          Mes Cours
        </h1>
        <Button
          radius="lg"
          className=" bg-secondary text-white max-w-[150px] font-semibold border-white border-3"
        >
          ajouter un cour
        </Button>
        <div className="flex gap-4 items-center justify-center flex-wrap">
          {courses.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
          Étudiants Inscrits:{" "}
          <span className="text-orange-400">{course.studentsNumber}</span>
        </p>
        <p className="">
          {" "}
          Revenus Générés :{" "}
          <span className="text-green-400">{course.genratedProfit} DA</span>
        </p>
      </div>
      <a href={`expert/course/${course.id}`}>
        <Button
          radius="lg"
          className=" bg-secondary text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
        >
          modifies
        </Button>
      </a>
      <Button
        radius="lg"
        className=" bg-red-500 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
        onPress={onOpen}
      >
        inédite
      </Button>
      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          className="m-1 sm:m-0"
        >
          <DeletePop pfp={data.image} />
        </Modal>
      </>
    </div>
  );
}
