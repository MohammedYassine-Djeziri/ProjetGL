import React from "react";
import stylus_note from "../assets/stylus_note.svg";

export default function TopBarRL() {
  return (
    <div
      className="w-full bg-primary border-b-1 border-black text-white p-4 shadow-2xl min-h-[7%] flex items-center justify-start gap-4
    "
    >
      <p className=" text-2xl font-bold">DZ Skills</p>
      <img src={stylus_note} alt="logo" className="h-9 w-9" />
    </div>
  );
}
