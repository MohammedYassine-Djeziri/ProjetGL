import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { useState, useEffect } from "react";
import play_circle from "../assets/play_circle.svg";
import assignment_turned_in from "../assets/assignment_turned_in.svg";
import library_books from "../assets/library_books.svg";
import { useFetchData } from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

// //from the backend
// const datat = {
//   id: 1,
//   title: "Course in data science",
//   modules: ["Module 1", "Module 2", "Module 3", "Module 4"],
//   cours: [
//     { title: "cours 1", type: "text", id: 1 },
//     { title: "cours 2", type: "video", id: 2 },
//   ],
//   quiz: [
//     { title: "quiz 1", type: "", id: 1 },
//     { title: "quiz 2", type: "", id: 2 },
//   ],
// };

export default function CourseClient() {
  const { data, isLoading, isError, error, refetch } = useFetchData("https://glbackend-tdpm.onrender.com/DzSkills/courses/");
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (data && data.length) {
      const foundCourse = data.find((c) => c.id === parseInt(id));
      setCourse(foundCourse || data[0]);
    }
  }, [data, id]);

  if (isLoading) {
    return (
      <div className="flex flex-col  justify-start min-h-screen w-full ">
        <TopBarExpert />
        <div class="flex flex-row min-h-screen justify-center items-center bg-primary">
          <h1 className="text-white">Loading...</h1>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col  justify-start min-h-screen w-full ">
        <TopBarExpert />
        <div class="flex flex-row min-h-screen justify-center items-center bg-primary">
          <h1 className="text-red-400">Error:</h1>
          <p className="text-white">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start min-h-screen w-full">
      <TopBarExpert />
      <div className="flex w-full h-full gap-4 p-4">
        <div className="h-full w-[15%] bg-secondary min-h-[85vh] flex flex-col items-center p-4 gap-7">
          <img
            src={course?.thumbnail_data || "https://placehold.co/128x128"}
            alt="thumbnail"
            className="rounded-xl h-32 w-32 object-cover"
          />
          {/* <Material modules={course?.modules} /> */}
        </div>
        <div className="h-full w-full bg-primary min-h-[85vh] flex flex-col items-center p-5 gap-4">
          <h3 className="underline text-white text-3xl font-semibold">{course?.title}</h3>
          <CourseDetails course={course} />
        </div>
      </div>
    </div>
  );
}

// Display detailed course information
function CourseDetails({ course }) {
  if (!course) return null;
  const instructorUser = course?.instructor?.user;
  const createdAt = new Date(course.created_at).toLocaleString();
  const updatedAt = new Date(course.updated_at).toLocaleString();

  return (
    <div className="bg-white p-4 rounded-xl w-full max-w-4xl flex flex-col gap-3">
      <h4 className="text-xl font-bold">Course Details</h4>
      <div className="flex gap-8">
        <div className="flex flex-col gap-1 w-1/2">
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Language:</strong> {course.language}</p>
          <p><strong>Price:</strong> ${course.price}</p>
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <p><strong>Created at:</strong> {createdAt}</p>
          <p><strong>Updated at:</strong> {updatedAt}</p>
        </div>
      </div>
      <hr className="my-2" />
      <h4 className="text-xl font-bold">Lessons</h4>
      <div className="flex flex-col gap-2">
        {course?.cours?.length ? (
          course.cours.map((lesson, index) => (
            <CourseItem course={lesson} key={index} />
          ))
        ) : (
          <p className="text-gray-500">No lessons added yet</p>
        )}
      </div>
      <hr className="my-2" />
      <h4 className="text-xl font-bold">Quizzes</h4>
      <div className="flex flex-col gap-2">
        {course?.quiz?.length ? (
          course.quiz.map((quiz, index) => (
            <CourseItem course={quiz} key={index} />
          ))
        ) : (
          <p className="text-gray-500">No quizzes available</p>
        )}
      </div>
      <hr className="my-2" />
      <h4 className="text-xl font-bold">Instructor Info</h4>
      <div className="flex gap-8">
        <div className="flex flex-col gap-1 w-1/2">
          <p><strong>Username:</strong> {instructorUser?.username}</p>
          <p><strong>Email:</strong> {instructorUser?.email}</p>
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <p><strong>First Name:</strong> {instructorUser?.first_name}</p>
          <p><strong>Last Name:</strong> {instructorUser?.last_name}</p>
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
