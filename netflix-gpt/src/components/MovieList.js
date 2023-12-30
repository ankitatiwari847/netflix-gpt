import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="movie-list flex overflow-x-scroll scrollbar-hide">
        {movieList &&
          movieList.map((movie) => {
            return (
              <div key={movie.id} className="flex">
                <MovieCard
                  id={movie?.id}
                  title={movie.title}
                  poster={movie?.backdrop_path}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieList;
