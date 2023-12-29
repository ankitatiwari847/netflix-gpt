import React, { useState, useEffect } from "react";
import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR, HAMBURGER_MENU } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import useCheckMobileScreen from "./hooks/useCheckMobileScreen";
import { toggleHamburgerMenu } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useCheckMobileScreen();
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  const [showDropDown, setShowDropDown] = useState("hidden");

  const user = useSelector((store) => {
    return store.user;
  });

  const handleGptSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleUserDropDown = () => {
    setShowDropDown((value) => (value === "block" ? "hidden" : "block"));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLangDropDown = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleHamburgerMenu = () => {
    dispatch(toggleHamburgerMenu());
  };

  useEffect(() => {
    //Controlling store update on signin,signup,signout from one place using onAuthStateChanged
    //onAuthStateChanged returns an unscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;

        //dispatch action addUser
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out, dispatch removeUser
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute md:w-screen max-sm:px-2 px-8 py-2 md:bg-gradient-to-b md:from-black z-10 md:h-30 flex justify-between">
      <div className="flex ">
        {isMobile && user && (
          <button
            onClick={handleHamburgerMenu}
            className="text-white transition-all duration-800 -left-36"
          >
            <img className="h-12" src={HAMBURGER_MENU} alt="hamburger menu" />
          </button>
        )}
        <div className="w-36">
          <img className="w-52 absolute max-md:w-28" src={LOGO} alt="logo" />
        </div>
      </div>
      {!isMobile && user && (
        <div className="flex flex-row">
          {showGptSearch && (
            <select
              onChange={(e) => handleLangDropDown(e)}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div className="text-white">
            <button
              onClick={handleGptSearch}
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            >
              {showGptSearch ? "Homepage" : "GPT Search"}
            </button>
          </div>
          <div className="relative inline-block">
            <img
              onClick={handleUserDropDown}
              src={user?.photoURL ? user?.photoURL : USER_AVATAR}
              alt="user icon"
              className="h-10 rounded-md m-2 self-center"
            />
            <div className={"bg-black p-2 absolute z-13  " + showDropDown}>
              <ul>
                <li className="text-white">
                  {user?.displayName ? "Hi!" + user.displayName : "Hello"}
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-white">
                    Signout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
