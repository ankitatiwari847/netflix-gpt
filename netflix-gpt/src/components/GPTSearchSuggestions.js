import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchSuggestions = () => {
  const { movieNames, searchResult, isLoading } = useSelector(
    (store) => store.gptSearch
  );
  if (!isLoading && !movieNames) return;

  return (
    <div className="text-white  h-screen ">
      <div className="md:p-10 p-2 relative bg-black opacity-95 md:top-[40%] top-[25%] min-h-full">
        {isLoading ? (
          <p className="text-center text-2xl">LOADING.....</p>
        ) : !searchResult ? (
          <p className="text-center text-2xl">No Result Found</p>
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
