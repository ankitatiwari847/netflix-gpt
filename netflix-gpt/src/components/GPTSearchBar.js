import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Function to fetch tmdb api data for movies given by gpt search
  const searchMovieTMDB = async (movieName) => {
    const result = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&page=1",
      API_OPTIONS
    );

    const json = await result.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    //call open ai api here & get results, use useRef to access the data in serch box
    const gptQuery =
      "Act as a movie recommendation system and suggest movies for the query: " +
      searchText.current.value +
      "only give names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const GPTResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!GPTResult?.choices) {
      //TODO: write error handling
    }

    const gptSearchMovieResult =
      GPTResult.choices?.[0]?.message?.content.split(",");
    //console.log(gptSearchMovieResult);
    //For each movie find tmbd api

    const SearchPromiseArray = gptSearchMovieResult.map((movie) =>
      searchMovieTMDB(movie)
    );
    //[promise, promise, promise...........]
    //we will get an array of promises, bcz gptSearchMovieResult is an async function, it will take some time to give result.

    //when all the promises will be resolved it will give data in tmdbSearchData
    const tmdbSearchData = await Promise.all(SearchPromiseArray);

    dispatch(
      addGPTMovieResult({
        movieNames: gptSearchMovieResult,
        searchResult: tmdbSearchData,
      })
    );
  };

  return (
    <div className='fixed w-screen h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/4feb9207-c556-4619-91c1-810dc9c5a290/US-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
      <div className="pt-[30%] md:pt-[10%] flex justify-center">
        <form
          className="w-full md:w-1/2 grid grid-cols-12 bg-black m-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className=".md:p-4 md:m-4 md:col-span-9 md:text-base col-span-8 p-2 m-1"
            type="text"
            ref={searchText}
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="md:col-span-3 bg-red-700 text-white md:p-4 md:m-4 md:font-semibold md:rounded-lg col-span-4 p-2 m-1"
            onClick={handleGPTSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
