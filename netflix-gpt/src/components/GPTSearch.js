import React, { useState } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  return (
    <div className="relative">
      <GPTSearchBar />
      <GPTSearchSuggestions />
    </div>
  );
};

export default GPTSearch;
