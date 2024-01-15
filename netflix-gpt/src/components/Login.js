import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Header from "./Header";
import ValidateInput from "../utils/validate";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";

const Login = () => {
  //Shows if user has already signed up take to sign in page
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [authError, setAuthError] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setIsSignedUp(!isSignedUp);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let error = ValidateInput(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value,
      isSignedUp
    );

    setErrorMsg(error);

    if (
      error
      // (!isSignedUp &&
      //   errorMessage.passwordError &&
      //   errorMessage.nameError &&
      //   errorMessage.nameError) ||
      // (errorMessage.passwordError && errorMessage.nameError)
    )
      return;

    //signIn && signUp logic
    if (isSignedUp) {
      //SignIn auth logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // if (errorMessage.authError) {
          //   setErrorMessage({
          //     ...errorMessage,
          //     authError: null,
          //   });
          // }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setAuthError(errorMsg);
        });
    } else {
      //SignUp auth logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //Update display name and user image
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setAuthError(error.message);
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          console.log(errorCode + "-" + errorMsg);
        });
    }
  };

  return (
    <div className="realtive md:bg-gradient-to-b md:from-black z-10">
      <div className='h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/4feb9207-c556-4619-91c1-810dc9c5a290/US-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
        <Header />
        <div className="m-auto max-w-md relative top-[20%] max-sm:top-0 bg-black-rgba min-h-[500px] p-14 max-sm:px-4 max-sm:h-screen max-sm:bg-black">
          <h2 className="font-semibold text-3xl text-white mb-7">
            {isSignedUp ? "Sign In" : "Sign Up"}
          </h2>

          {errorMsg && (
            <p className="text-red-700 font-semibold mb-2">{errorMsg}</p>
          )}
          {authError && (
            <p className="text-red-700 font-semibold mb-2">{authError}</p>
          )}
          <form className="flex justify-center column flex-col items-center">
            {!isSignedUp && (
              <div className="mb-4 w-full">
                <input
                  type="text"
                  ref={name}
                  className="bg-[#333] h-12 rounded-md w-full py-3 pl-3 focus:text-white text-white z-12"
                  placeholder="Name"
                />
              </div>
            )}
            <div className="mb-4 w-full">
              <input
                type="text"
                ref={email}
                className="bg-[#333] h-12 rounded-md w-full py-3 pl-3 focus:text-white text-white"
                placeholder="Email"
              />
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                ref={password}
                className="bg-[#333] h-12 rounded-md w-full py-3 pl-3 focus:text-white text-white"
                placeholder="Password"
              />
            </div>
            <button
              onClick={(e) => {
                handleFormSubmit(e);
              }}
              className="text-white rounded-md my-5 w-full bg-[#e50914] py-3 focus:text-white"
            >
              {isSignedUp ? "Sign In" : "Sign Up"}
            </button>
          </form>
          {isSignedUp ? (
            <>
              <span className="text-gray-200 opacity-40 font-light">
                New to Netflix?{" "}
              </span>
              <button className="text-white" onClick={toggleSignUp}>
                Sign Up now.
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-200 opacity-40 font-light">
                Already a user?{" "}
              </span>
              <button className="text-white" onClick={toggleSignUp}>
                Login now.
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
