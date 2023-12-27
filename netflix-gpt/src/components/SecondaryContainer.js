import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const popular = useSelector((store) => store.movies.popularMovies);
  const topRated = useSelector((store) => store.movies.topRatedMovies);
  const upcoming = useSelector((store) => store.movies.upcomingMovies);

  return (
    nowPlaying && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movieList={nowPlaying} />
          <MovieList title={"Popular"} movieList={popular} />
          <MovieList title={"Top Rated"} movieList={topRated} />
          <MovieList title={"Upcoming"} movieList={upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
