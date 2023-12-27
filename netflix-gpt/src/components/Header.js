import React, { useState, useEffect } from "react";
import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState("hidden");
  const user = useSelector((store) => {
    return store.user;
  });

  const handleDropDown = () => {
    setShowDropDown((value) => (value === "hidden" ? "" : "hidden"));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
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
    <div className="absolute w-screen max-sm:px-2 px-8 py-2 md:bg-gradient-to-b md:from-black z-10 md:h-40 flex justify-between">
      <div>
        <img className="w-52 absolute max-md:w-28" src={LOGO} alt="logo" />
      </div>
      {user && (
        <div>
          <div className="flex justify-end">
            <img
              onClick={handleDropDown}
              src={user?.photoURL ? user?.photoURL : USER_AVATAR}
              alt="user icon"
              className="h-10 rounded-md m-2"
            />
          </div>
          <div
            className={
              "bg-black p-2 " +
              showDropDown +
              " right-0 z-15 rounded-md origin-top-right"
            }
          >
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
      )}
    </div>
  );
};

export default Header;
