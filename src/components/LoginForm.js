import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useState, useRef } from "react";
import { checkvaliddata } from "../utils/validData";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
const LoginForm = () => {
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const [IsSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignIn(!IsSignIn);
  };

  const handleSignIn = () => {
    const message = checkvaliddata(email.current.value, password.current.value);
    seterrorMessage(message);

    if (message) return;

    if (!IsSignIn) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              const errorMessage = error.message;
              seterrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCOde = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCOde + errorMessage);
          // ..
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const handleGuestLogin = () => {
    email.current.value = "twinklegoyal0@gmail.com";
    password.current.value = "Helloworld123";
    handleSignIn();
  };


  return (
    <div className="flex">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-8 lg:p-12 bg-black absolute w-full md:w-[40%] md:left-[30%] xl:w-[30%] lg:w-[35%] lg:left-[37%] top-[20%] flex flex-col text-white bg-opacity-80 rounded-lg "
      >
        <h1 className=" text-2xl md:3xl py-4 mx-1 font-bold ">
          {IsSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {IsSignIn ? (
          ""
        ) : (
          <input
            ref={fullName}
            className="p-4 my-4 bg-gray-700  "
            type="text"
            placeholder="Full Name "
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 bg-gray-700  "
          type="text"
          placeholder="Email "
        />
        <input
          ref={password}
          className="p-4 my-4 bg-gray-700  "
          type="text"
          placeholder="Password "
        />

        <button
          onClick={handleSignIn}
          className="bg-red-700 p-4 my-2 rounded-lg"
        >
          {IsSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-center">
          <p>OR</p>
        </div>
        <button onClick={handleGuestLogin} className="bg-red-700 p-4 my-2 rounded-lg">
          Login as Guest
        </button>
        <p className="text-red-500 p-2 font-bold">{errorMessage}</p>
        <p className="p-2  cursor-pointer " onClick={toggleSignInForm}>
          {IsSignIn
            ? "New To Netflix ? Sign Up Now"
            : "Already A user ? Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
