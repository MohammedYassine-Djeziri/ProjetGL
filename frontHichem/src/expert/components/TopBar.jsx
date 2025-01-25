import React from "react";
import stylus_note from "../../assets/stylus_note.svg";
import Search from "./Search";
import { Avatar } from "@nextui-org/react";

export default function TopBarExpert() {
  //will be taken from the jwt token
  const pfp =
    "https://media.vanityfair.com/photos/5d62a5ca7a1e590008d3853f/master/pass/breaking-bad-movie-teaser.jpg";

  return (
    <div className="w-full bg-primary border-b-1 border-black text-white p-4 shadow-2xl min-h-[7%] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <p className=" text-2xl font-bold">DZ Skills</p>
        <img src={stylus_note} alt="logo" className="h-9 w-9" />
      </div>
      <Search />
      <Avatar src={pfp} fallback size="md" className="" />
    </div>
  );
}
