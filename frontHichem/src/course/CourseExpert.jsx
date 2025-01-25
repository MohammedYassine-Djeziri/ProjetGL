import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { Button } from "@nextui-org/react";
import deletee from "../assets/delete.svg";
import { useState } from "react";
import play_circle from "../assets/play_circle.svg";
import border_color from "../assets/border_color.svg";
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
};

export default function CourseExpert() {
  const [data, setData] = useState(datat);
  return (
    <div className="flex flex-col  justify-start min-h-screen w-full ">
      <TopBarExpert />
      <div className="flex  w-full h-full  gap-4 p-4">
        <div className=" h-full w-[15%] bg-secondary min-h-[85vh] flex flex-col items-center p-4 gap-5 ">
          <img
            src="https://www.slate.fr/uploads/store/drupal_slate/joel-muniz-xqxjjhk-c08-unsplash.jpg"
            alt="logo"
            className=" rounded-xl h-24"
          />
          <Button
            radius="lg"
            className=" bg-white min-w-[150px] font-semibold border-black border-3 shadow-large"
          >
            Modifier la photo
          </Button>
          <Material modules={data?.modules} />
          <Button
            radius="lg"
            className=" bg-black text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
          >
            Sauvegarder
          </Button>
        </div>
        <div className=" h-full w-full bg-primary min-h-[85vh] flex flex-col items-center justify-start p-5 gap-4">
          <div className="flex w-full justify-between items-center">
            <h3 className=" underline text-white text-2xl font-semibold w-full">
              {data.title}
            </h3>
            <AjouterModule />
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
            <img
              src={deletee}
              alt="delete"
              className=" w-5 h-5 cursor-pointer"
            />
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
      <div className="flex gap-2 items-center">
        {/* will ge the id in linking */}
        <DeleteModule />
        {course.type === "text" || course.type === "video" ? (
          <a href="#">
            <img
              src={border_color}
              alt="delt"
              className="h-5 w-5 cursor-pointer"
            />
          </a>
        ) : (
          <EditModule />
        )}
      </div>
    </div>
  );
}

import { Modal, useDisclosure } from "@nextui-org/react";
function AjouterModule() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        radius="lg"
        className=" bg-secondary text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
      >
        Ajouter au cours
      </Button>
      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          className="m-1 sm:m-0"
        >
          <AjoutPop />
        </Modal>
      </>
    </>
  );
}

import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { FileUploader } from "react-drag-drop-files";

import { useRef } from "react";
function AjoutPop() {
  const onCloseRef = useRef(null);

  const submit = async () => console.log("submitting");

  return (
    <ModalContent className="bg-blue-500 border-secondary border-8">
      {(onClose) => {
        onCloseRef.current = onClose;
        return (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex flex-col items-center">
              <FileUploader
                name="Picture"
                maxSize={5}
                children={
                  <p className="text-xl rounded-2xl font-semibold bg-secondary px-6 py-2 w-[100%]">
                    Upload PDF
                  </p>
                }
              />
              <FileUploader
                name="Picture"
                maxSize={5}
                children={
                  <p className="text-xl rounded-2xl font-semibold bg-secondary px-6 py-2 w-[100%]">
                    Upload Video
                  </p>
                }
              />
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button
                className="bg-gray-600 text-white font-semibold"
                variant="flat"
                radius="lg"
                onPress={submit}
              >
                Sauvegarder
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}

function DeleteModule() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <img
        src={deletee}
        alt="delt"
        className="h-6 w-6 cursor-pointer"
        onClick={onOpen}
      />
      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          className="m-1 sm:m-0"
        >
          <DeletePop />
        </Modal>
      </>
    </>
  );
}

function DeletePop() {
  const onCloseRef = useRef(null);

  const submit = async () => console.log("submitting");

  return (
    <ModalContent className="bg-red-500 border-green-500 border-8">
      {(onClose) => {
        onCloseRef.current = onClose;
        return (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex flex-col items-center">
              <p className="text-xl rounded-2xl font-semibold bg-secondary px-6 py-2">
                vous etes sure de la suprission ?
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button
                className="bg-black text-white font-semibold"
                onClick={submit}
                radius="lg"
                // isLoading={uploading}
                // isDisabled={!ableToUpload}
              >
                oui
              </Button>
              <Button
                className="bg-blue-500 text-white font-semibold"
                variant="flat"
                radius="lg"
                onPress={onClose}
              >
                non
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}

function EditModule() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <img
        src={border_color}
        alt="delt"
        className="h-5 w-5 cursor-pointer"
        onClick={onOpen}
      />
      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="center"
          className="m-1 sm:m-0 min-w-[1000px]"
        >
          <EditPop />
        </Modal>
      </>
    </>
  );
}

function EditPop() {
  const onCloseRef = useRef(null);

  const submit = async () => console.log("submitting");

  return (
    <ModalContent className="bg-blue-600 border-white border-8">
      {(onClose) => {
        onCloseRef.current = onClose;
        return (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              {" "}
              modifier le quiz
            </ModalHeader>
            <ModalBody className="flex flex-col items-center">
              {/* these are static , at the linking , should be made dynamic , as a component by its own */}
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[500px] text-center">
                  Q1
                </div>
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[300px] text-center">
                  la reponse juste
                </div>
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[300px] text-center">
                  reponse 2
                </div>
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[300px] text-center">
                  reponse 3
                </div>
                <Button
                  radius="lg"
                  className=" bg-green-600 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
                >
                  Ajouter une reponse
                </Button>
              </div>
              <div className="flex flex-col w-full items-center justify-center gap-2">
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[500px] text-center">
                  Q2
                </div>
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[300px] text-center">
                  la reponse juste
                </div>
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[300px] text-center">
                  reponse 2
                </div>
                <div className="rounded-2xl font-semibold bg-white px-6 py-2 min-w-[300px] text-center">
                  reponse 3
                </div>
                <Button
                  radius="lg"
                  className=" bg-green-600 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
                >
                  Ajouter une reponse
                </Button>
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button
                radius="lg"
                className=" bg-green-600 text-white min-w-[150px] font-semibold border-white border-3 shadow-large"
              >
                Ajouter une Question
              </Button>
              <Button
                className="bg-gray-600 text-white font-semibold"
                onClick={submit}
                radius="lg"
                // isLoading={uploading}
                // isDisabled={!ableToUpload}
              >
                Sauvegarder
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}
