import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ title, poster }) => {
  return (
    <>
      {poster && (
        <div className="w-64 h-44 mr-4 relative">
          <img
            className="object-cover rounded-md"
            src={IMG_CDN + poster}
            alt="img poster"
          />
          <div className="absolute bg-gradient-to-t from-black top-0 w-full h-full">
            <p className="text-slate-200 text-base font-bold w-8/12 line-clamp-2 absolute bottom-10 p-4">
              {title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
