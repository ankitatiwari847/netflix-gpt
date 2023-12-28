import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburgerMenu } from "../utils/configSlice";
import { LOGO } from "../utils/constants";
import GPTSearch from "./GPTSearch";
import GPTSearchBar from "./GPTSearchBar";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";

const HamburgerMenu = () => {
  const menuOpen = useSelector((store) => store.config.showHamburgerMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(toggleHamburgerMenu());
  };

  const handleGptSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className={
        "bg-white absolute w-full h-full" +
        (menuOpen ? " menu-open " : "menu-close") +
        "z-50"
      }
    >
      <div className="flex flex-row justify-between mt-5">
        <div className="w-36">
          <img src={LOGO} alt="logo" />
        </div>
        <button
          type="button"
          className="font-semibold absolute right-0 p-4"
          onClick={handleClose}
        >
          close
        </button>
      </div>
      <div className="flex flex-col mt-10">
        <button
          onClick={handleGptSearch}
          className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
        >
          GPT Search
        </button>
        <button onClick={handleSignOut} className="text-black font-semibold">
          Signout
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
