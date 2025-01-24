import React from "react";
import TopBarExpert from "../expert/components/TopBar";
import { useState } from "react";
import { Input, Button } from "@nextui-org/react";

//to be fetched from the backend
const data = {
  cours: ["math", "react"],
  profit: "1000 $",
  code: "c@xQcrTo",
};

export default function Afiliate() {
  return (
    <div className="flex flex-col  justify-start min-h-screen w-full bg-primary ">
      <TopBarExpert />
      <div className="flex items-center justify-between w-full h-[89vh]  bg-white">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Left() {
  // change at linking
  const init = [true, false];
  const [status, setStatus] = useState(init);

  return (
    <div className="w-[47%] flex flex-col  h-full ">
      <h3 className="text-2xl text-blue-600 ml-8 font-extrabold">Profile : </h3>
      <form className="flex flex-col items-center justify-center gap-8 text-lg font-semibold mt-3 bg-primary p-10 h-[85vh]">
        <Input
          type="email"
          label="E-Mail"
          required
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Numero de telephone"
          required
          //   onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="password"
          label="Mot de passe"
          //   onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col w-full text-white text-xl font-bold gap-2 ">
          <h3>votre status :</h3>
          <div className="flex w-full justify-between px-28">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 "
                onChange={() => setStatus([true, false])}
                checked={status[0]}
              />
              <p>Expert</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 "
                onChange={() => setStatus([false, true])}
                checked={status[1]}
              />
              <p>Apprenant</p>
            </div>
          </div>
        </div>
        <Button
          className="bg-secondary text-white p-2 rounded-lg min-w-[300px] font-bold"
          radius="lg"
        >
          Modifier
        </Button>
      </form>
    </div>
  );
}

function Right() {
  // change at linking
  const init = [true, false];
  const [status, setStatus] = useState(init);

  return (
    <div className="w-[47%] flex flex-col  h-full ">
      <h3 className="text-2xl text-blue-600 ml-8 font-extrabold">Profile : </h3>
      <form className="flex flex-col items-center gap-8 text-lg font-semibold mt-3 bg-primary p-10 h-[85vh]">
        <div className="flex flex-col w-full text-white text-xl font-bold gap-2 ">
          <h3>votre status :</h3>
          <div className="flex w-full justify-between px-28">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 "
                onChange={() => setStatus([true, false])}
                checked={status[0]}
              />
              <p>Active</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="w-5 h-5 "
                onChange={() => setStatus([false, true])}
                checked={status[1]}
              />
              <p>Desactive</p>
            </div>
          </div>
        </div>

        {status[0] ? <Programe /> : <ProgrameLocked />}
      </form>
    </div>
  );
}

function Programe() {
  const [cours, setCours] = useState(data.cours);

  const [code, setCode] = useState(data.code);

  const [profit, setProfit] = useState(data.profit);

  return (
    <>
      <div className="flex flex-col gap-1 w-[80%]">
        <p className="text-white font-semibold">votre code d’affiliation :</p>
        <div className="text-secondary font-semibold text-center bg-white rounded-2xl py-2">
          {code}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[80%]">
        <p className="text-white font-semibold">votre revenus :</p>
        <div className="text-secondary font-semibold text-center bg-white rounded-2xl py-2">
          {profit}
        </div>
      </div>
      <h3 className="text-2xl text-white font-semibold">
        La list de votre cours{" "}
      </h3>
      <div className="flex flex-col items-center justify-center gap-4 w-full overflow-auto">
        {cours.map((cour, idx) => {
          console.log(cour);
          return <Cour cour={cour} key={idx} />;
        })}
      </div>
    </>
  );
}

import content_copy from "../assets/content_copy.svg";
import check_circle from "../assets/check_circle.svg";

function Cour({ cour }) {
  console.log(cour);
  return (
    <div className="flex justify-between px-2 bg-secondary items-center rounded-xl min-w-[500px]">
      <div className="flex items-center gap-2">
        <img src={check_circle} alt="check" />
        <p className="font-bold text-xl">Titel : {cour}</p>
      </div>
      <img src={content_copy} alt="download" className="cursor-pointer" />
    </div>
  );
}

import lock from "../assets/lock.svg";

function ProgrameLocked() {
  return (
    <div className="relative flex flex-col items-center gap-4 w-full h-full bg-primary">
      <div className="flex flex-col gap-1 w-[80%]">
        <p className="text-white font-semibold">votre code d’affiliation :</p>
        <div className="text-secondary font-semibold text-center bg-white rounded-2xl py-2">
          ######################
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[80%]">
        <p className="text-white font-semibold">votre revenus :</p>
        <div className="text-secondary font-semibold text-center bg-white rounded-2xl py-2">
          00000 DA
        </div>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full bg-slate-500 opacity-50 rounded-xl p-8 "
        alt="lock"
        src={lock}
      />
    </div>
  );
}
