import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstant";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className='w-screen h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/4feb9207-c556-4619-91c1-810dc9c5a290/US-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
      <div className="pt-[30%] md:pt-[10%] flex justify-center">
        <form
          className="w-full md:w-1/2 grid grid-cols-12 bg-black m-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className=".md:p-4 md:m-4 md:col-span-9 md:text-base col-span-8 p-2 m-1"
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="md:col-span-3 bg-red-700 text-white md:p-4 md:m-4 md:font-semibold md:rounded-lg col-span-4 p-2 m-1">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
