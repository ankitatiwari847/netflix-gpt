import React from "react";
import { useSelector } from "react-redux";
import { VideoBackground } from "./VideoBackground";
import { VideoTitle } from "./VideoTitle";
import getRandomInt from "../utils/getRandomInt";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[getRandomInt(movies.length)];

  return (
    <div className="pt-[20%] bg-black md:pt-0">
      <VideoTitle
        title={mainMovie.original_title}
        overview={mainMovie.overview}
        movieId={mainMovie.id}
      />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
