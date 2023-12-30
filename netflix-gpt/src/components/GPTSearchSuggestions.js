import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchSuggestions = () => {
  const { movieNames, searchResult } = useSelector((store) => store.gptSearch);
  if (!movieNames) return;

  return (
    <div className="text-white  h-screen ">
      <div className="md:p-10 p-2 relative bg-black opacity-95 md:top-[40%] top-[25%]">
        {!searchResult ? (
          <p>No Result Found</p>
        ) : (
          <>
            {movieNames.map((movie, index) => {
              return (
                <MovieList
                  key={movie}
                  title={movie}
                  movieList={searchResult[index]}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default GPTSearchSuggestions;
