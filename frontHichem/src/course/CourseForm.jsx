import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import {
  Button,
  Input,
  Modal,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import thumb_up from "../assets/thumb_up.svg";
import forum from "../assets/forum.svg";
import Search from "./Search";

//from the backend
const datat = {
  id: 1,
  title: "Course in data science",
  modules: ["Module 1", "Module 2", "Module 3", "Module 4"],
  forms: [
    {
      title: "form 1",
      id: 1,
      description:
        "Some day we gon' set it off Some day we gon' get this off Baby, don't you bet it all On a pack of Fentanyl You might think they wrote you off They gon' have to rope me off Some day the drama'll be gone And they'll pray, it's not enough Sometimes I take all the shine Talk like I drank all the wine Years ahead but way behind I'm on one, two, three, four, five No half-truths, just naked minds Caught between space and time This not what we had in mind But maybe some day",
    },
    {
      title: "form 2",
      id: 2,
      description:
        "Some day we gon' set it off Some day we gon' get this off Baby, don't you bet it all On a pack of Fentanyl You might think they wrote you off They gon' have to rope me off Some day the drama'll be gone And they'll pray, it's not enough Sometimes I take all the shine Talk like I drank all the wine Years ahead but way behind I'm on one, two, three, four, five No half-truths, just naked minds Caught between space and time This not what we had in mind But maybe some day",
    },
  ],
};

export default function CourseForm() {
  const [data, setData] = useState(datat);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
          <Button
            radius="lg"
            className=" bg-white min-w-[150px] font-semibold border-black border-3 shadow-large"
            onPress={onOpen}
          >
            joines la form
          </Button>
          <>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="center"
              className="m-1 sm:m-0"
            >
              <NewForm />
            </Modal>
          </>
        </div>
        <div className=" h-full w-full bg-primary min-h-[85vh] flex flex-col items-center justify-start p-5 gap-4">
          <div className="flex w-full justify-between items-center">
            <h3 className=" underline text-white text-2xl font-semibold w-full">
              Form
            </h3>
          </div>
          <div className="flex items-center gap-4 ">
            <Search />{" "}
            <Button
              onPress={onOpen}
              radius="lg"
              className=" bg-white min-w-[150px] font-semibold border-green-500 border-3 shadow-large"
            >
              crier un post
            </Button>
            <>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                className="m-1 sm:m-0"
              >
                <NewForm />
              </Modal>
            </>
          </div>
          <div className="flex flex-col gap-4 items-center bg-white p-4 rounded-xl h-[63vh] w-[60%] overflow-y-auto">
            {data.forms.map((form, index) => (
              <FormItem form={form} key={index} />
            ))}
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

function FormItem({ form }) {
  return (
    <div className="flex flex-col items-start gap-4 w-[95%] rounded-2xl shadow-xl p-3 bg-gradient-to-b from-[#D9D9D9] to-[#FFFFFF]">
      <p className="text-xl underline font-semibold">{form.title}</p>
      <p>{form.description}</p>
      <div className="flex items-center gap-4">
        <img src={thumb_up} alt="thumb" className="cursor-pointer" />
        <img src={forum} alt="comment" className="cursor-pointer" />
      </div>
    </div>
  );
}

import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

import { useRef } from "react";

function NewForm() {
  const onCloseRef = useRef(null);

  const submit = async () => console.log("submitting");

  return (
    <ModalContent className="border-gradient-to-b from-[#0059FF] to-[#00FF84] border-4">
      {(onClose) => {
        onCloseRef.current = onClose;
        return (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Crier un post
            </ModalHeader>
            <ModalBody className="flex flex-col items-center">
              <Input label="ecrire un titre" />
              <Textarea label="ecrire votre question" />
            </ModalBody>
            <ModalFooter className="flex justify-center gap-6">
              <Button
                className="  font-semibold"
                onClick={submit}
                radius="lg"
                // isLoading={uploading}
                // isDisabled={!ableToUpload}
              >
                Publier
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </ModalContent>
  );
}
