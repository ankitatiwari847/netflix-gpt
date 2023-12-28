import React from "react";
import { PLAY } from "../utils/constants";

export const VideoTitle = ({ title, overview }) => {
  //fetch trailer video using the movie id
  return (
    <div className="text-white w-screen aspect-video md:pt-[20%] pt-[20%] absolute md:pl-12 pl-4 bg-gradient-to-tr from-black">
      <div className="md:w-3/12 w-8/12">
        <h1 className="md:font-bold md:text-3xl font-medium text-base">
          {title}
        </h1>
        <p className="md:mt-6 md:font-medium md:text-base md:line-clamp-3 mt-1 text-xs line-clamp-1">
          {overview}
        </p>
        <div className="flex md:py-4 py-1">
          <button className="bg-white text-black flex justify-center md:px-5 px-2 md:py-2 py-1 rounded-md md:font-bold font-semibold items-center mr-2">
            <img className="md:h-8 h-4 pr-1" src={PLAY} alt="play" />
            Play
          </button>
          <button className="bg-gray-700 text-white flex justify-center md:px-5 px-2 md:py-2 py-2 rounded-md md:font-bold font-semibold items-center">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
