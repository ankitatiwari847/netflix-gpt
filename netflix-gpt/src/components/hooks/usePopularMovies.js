import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../../utils/moviesSlice";

const usePopularMovies = () => {
  //fetch data from TMDB api and update store
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
