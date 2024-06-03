import React from "react";
import { INFO_ICON, PLAY_ICON } from "../utils/Constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] w-full aspect-video px-10 absolute bg-gradient-to-r from-black">
      <h1 className=" text-white font-bold text-xl md:text-3xl">{title}</h1>
      <p className=" text-white w-[90%] md:w-1/3 text-sm md:text-lg opacity-50 md:opacity-100">{overview}</p>

      <div className="w-1/2 flex gap-6  py-4">
        <button className="text-black text-sm md:text-xl  self-center flex gap-2 bg-white px-2 py-4 md:px-4 md:py-3 rounded-md hover:bg-opacity-80">
          {" "}
          <span className="md:self-end self-center ">{PLAY_ICON}</span> Play{" "}
        </button>
        <button className="text-white text-sm md:text-xl flex gap-2  bg-gray-500 px-2 py-2 md:px-4 md:py-3  rounded-md hover:bg-opacity-80">
          {" "}
          <span className="self-center md:self-end">{INFO_ICON}</span>More Info{" "}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
