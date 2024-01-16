import React, { useEffect, useState } from "react";
import { VideoBackground } from "./VideoBackground";
import { API_OPTIONS, CROSS_ICON } from "../utils/constants";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const fetchMovieDetails = async (id) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    setMovieDetails({
      ...movieDetails,
      title: json?.original_title,
      overview: json?.overview,
    });
  };

  useEffect(() => {
    fetchMovieDetails(id);
  }, []);

  return (
    <div className="relative">
      <Link to={"/browse"}>
        <img
          className="absolute bg-white h-10 top-3 right-4 rounded-3xl"
          src={CROSS_ICON}
          alt="cancel"
        />
      </Link>
      <VideoBackground movieId={id} />
      <div className="bg-black text-white">
        <p className="font-bold text-xl">{movieDetails?.title}</p>
        <p className="mt-5 pb-10">{movieDetails?.overview}</p>
      </div>
    </div>
  );
};

export default MovieView;
