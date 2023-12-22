import React, { useState } from "react";
import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState("hidden");
  const user = useSelector((store) => store.user);

  const handleDropDown = () => {
    setShowDropDown((value) => (value === "hidden" ? "" : "hidden"));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen max-sm:px-2 px-8 py-2 md:bg-gradient-to-b md:from-black z-10 h-48 flex justify-between">
      <div>
        <img className="w-52 absolute max-md:w-28" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div>
          <img
            onClick={handleDropDown}
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            alt="user icon"
            className="h-11 m-2"
          />
          <div className={"bg-black p-2 " + showDropDown}>
            <ul>
              <li className="text-white">
                {user?.displayName ? "Hi," + user.displayName : "Hello"}
              </li>
              <li>
                <button onClick={handleSignOut} className="text-white">
                  Signout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
