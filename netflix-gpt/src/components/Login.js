import { useRef, useState } from "react";
import Header from "./Header";
import {
  emailValidate,
  passwordValidate,
  nameValidate,
} from "../utils/validate";

const Login = () => {
  //Shows if user has already signed up take to sign in page
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    emailError: "",
    passwordError: "",
    nameError: "",
  });
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignUp = () => {
    setIsSignedUp(!isSignedUp);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let emailError = emailValidate(email?.current?.value);
    let passwordError = passwordValidate(password?.current?.value);
    let nameError = name?.current?.value ? null : "Please enter name";

    setErrorMessage({
      ...errorMessage,
      emailError: emailError,
      passwordError: passwordError,
      nameError: nameError,
    });

    console.log(errorMessage);
  };

  return (
    <div className="realtive md:bg-gradient-to-b md:from-black z-10">
      <div className='h-screen bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/4feb9207-c556-4619-91c1-810dc9c5a290/US-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
        <Header />
        <div className="m-auto max-w-md relative top-[20%] max-sm:top-0 bg-black-rgba min-h-[500px] p-14 max-sm:px-4 max-sm:h-screen max-sm:bg-black">
          <h2 className="font-semibold text-3xl text-white mb-7">
            {isSignedUp ? "Sign In" : "Sign Up"}
          </h2>

          <form className="flex justify-center column flex-col items-center">
            {!isSignedUp && (
              <div className="mb-4 w-full">
                <input
                  type="text"
                  ref={name}
                  className="bg-[#333] h-12 rounded-md w-full py-3 pl-3 focus:text-white"
                  placeholder="Name"
                />
                {errorMessage?.nameError && (
                  <p className="text-red-700 font-semibold">
                    {errorMessage?.nameError}
                  </p>
                )}
              </div>
            )}
            <div className="mb-4 w-full">
              <input
                type="text"
                ref={email}
                className="bg-[#333] h-12 rounded-md w-full py-3 pl-3 focus:text-white text-white"
                placeholder="Email"
              />
              {errorMessage?.emailError && (
                <p className="text-red-700 font-semibold">
                  {errorMessage?.emailError}
                </p>
              )}
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                ref={password}
                className="bg-[#333] h-12 rounded-md w-full py-3 pl-3 focus:text-white text-white"
                placeholder="Password"
              />
              {errorMessage?.passwordError && (
                <p className="text-red-700 font-semibold">
                  {errorMessage?.passwordError}
                </p>
              )}
            </div>
            <button
              onClick={(e) => {
                handleFormSubmit(e);
              }}
              className="text-white rounded-md my-5 w-full bg-[#e50914] py-3 focus:text-white text-white"
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
    </div>
  );
};
export default Login;
