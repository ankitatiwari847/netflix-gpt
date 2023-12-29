import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburgerMenu } from "../utils/configSlice";
import { LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";

const HamburgerMenu = () => {
  const menuOpen = useSelector((store) => store.config.showHamburgerMenu);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(toggleHamburgerMenu());
  };

  const handleGptSearch = () => {
    dispatch(toggleGPTSearchView());
    handleClose();
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
      id="menu"
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
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <button
          onClick={handleSignOut}
          className="text-black font-semibold my-3"
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
