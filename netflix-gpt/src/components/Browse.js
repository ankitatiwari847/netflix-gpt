import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/usePopularMovies copy";
import Footer from "./Footer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import HamburgerMenu from "./HamburgerMenu";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  const showHamburger = useSelector((store) => store.config.showHamburgerMenu);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showHamburger && <HamburgerMenu />}
      <div>
        {showGptSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
