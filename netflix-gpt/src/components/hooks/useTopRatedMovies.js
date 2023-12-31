import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../../utils/moviesSlice";

const useTopRatedMovies = () => {
  //fetch data from TMDB api and update store
  const dispatch = useDispatch();

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
