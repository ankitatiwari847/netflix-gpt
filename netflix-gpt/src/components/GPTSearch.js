import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";

const GPTSearch = () => {
  return (
    <div className="relative">
      <GPTSearchBar />
      <GPTSearchSuggestions />
    </div>
  );
};

export default GPTSearch;
