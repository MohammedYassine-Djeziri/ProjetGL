import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { Button } from "@nextui-org/react";
import BeatLoader from "react-spinners/BeatLoader";
import { useFetchData } from "../hooks/useFetchData";

export default function SearchResultClient() {
  const query = new URLSearchParams(window.location.search).get("query");
  const { data, isLoading, isError, error, refetch } = useFetchData("https://glbackend-tdpm.onrender.com/DzSkills/courses/");

  const getContent = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-32">
          <BeatLoader color="#3B82F6" size={12} />
          <span className="ml-2 text-blue-500">Loading...</span>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-600 mb-3">Error: {error.message}</p>
          <Button onPress={refetch}>Retry</Button>
        </div>
      );
    }

    return data?.map((course) => <CourseCard course={course} key={course.id} />);
  };

  return (
    <div className="flex flex-col justify-start min-h-screen w-full bg-primary">
      <TopBarExpert />
      <div className="flex flex-col items-center justify-start w-full h-full bg-primary gap-4 p-6">
        <h3 className="text-2xl font-semibold text-white w-full underline">
          voici les resultas:
        </h3>
        <div className="flex flex-col gap-4 w-[90%] items-center">
          {getContent()}
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="flex items-center justify-evenly gap-2 p-4 rounded-3xl bg-gradient-to-b from-[#00FF84] to-[#FFFFFF] border-2 border-white">
      <div className="flex flex-col gap-2 h-full max-w-[50%]">
        <p className="font-bold text-2xl">Title: {course.title}</p>
        <p className="font-semibold text-xl">
          L’ensegnent : {course.instructor?.user?.username}
        </p>
        <p className="font-bold text-2xl">Description</p>
        <p className="text-semibold text-xl">{course.description}</p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <a href="/course-expert/afiliate-example">
          <Button
            radius="lg"
            className="bg-gray-700 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
          >
            generer un lien d’affiation
          </Button>
        </a>
        <Button
          radius="lg"
          className="bg-red-500 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
        >
          Voir les detailes
        </Button>
        <Button
          radius="lg"
          className="bg-blue-500 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
        >
          Acheter maintenant
        </Button>
      </div>
      <img
        src={course.thumbnail}
        alt="course"
        className="h-[270px] w-[230px] rounded-2xl"
      />
    </div>
  );
}
