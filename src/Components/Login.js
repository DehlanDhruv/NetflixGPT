import React, { useState, useRef } from "react";
import { ValidateData } from "../utils/Validate";
import { auth } from '../utils/Firebase'
import { updateProfile } from "firebase/auth";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { BG_URL ,BG_URL_MOBILE } from "../utils/Constants";


const Login = () => {
  const [isUserSignIn, setIsUserSignIn] = useState(true);
  const [loginError , setLoginError] = useState(null);
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignIn = () => {
    setIsUserSignIn(!isUserSignIn);
  };

  const handleSubmit = () => { 
    const emailValue = email.current.value;  
    const passwordValue = password.current.value; 
    
    const error = ValidateData(emailValue, passwordValue);   
    setLoginError(error)
    if(error) return;  // if there is any error return from here else signin or signup the user

    if(!isUserSignIn){
      const nameValue = name.current.value;

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: nameValue 

        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorCode + errorMessage)
        // ..
      });

      

    }

    else{
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorCode + errorMessage)
      });
    }
  };

  return (
    <div>
      <Header/>
      {window.innerWidth <= 800 ? <img src={BG_URL_MOBILE} className="h-[900px] object-cover"/> : <img src={BG_URL} />}

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 z-10 bg-black p-10 w-[90%] left-0 right-0 mx-auto h-fit bg-opacity-85  md:w-1/3 md:absolute md:top-1/4"
      >
        <h1 className="text-white font-bold  text-3xl">
          {isUserSignIn ? "Sign In " : "Sign Up"}
        </h1>

        <input
          ref={email}
          className="rounded p-2 my-4 w-full bg-gray-600"
          type="text"
          placeholder="Email or Mobile Number"
        ></input>

        {!isUserSignIn ? (
          <input
            ref={name}
            className="  rounded p-2 my-3 w-full bg-gray-600"
            type="text"
            placeholder="Full Name"
          ></input>
        ) : (
          ""
        )}

        <input
          ref={password}
          className="rounded p-2 w-full bg-gray-600"
          placeholder="Password"
          type="password"
        ></input>

        <button
          onClick={handleSubmit}
          className="bg-red-700 rounded p-2 w-full text-white my-6 "
        >
          {" "}
          {isUserSignIn ? "Sign In " : "Sign Up"}
        </button>

        {loginError ? <p className="text-red-600">{loginError}</p> : null}


        {isUserSignIn ? (
          <p
            onClick={handleSignIn}
            className="text-lg text-white cursor-pointer"
          >
            New to NetFlix ? <span className="font-bold">Sign Up Now </span>
          </p>
        ) : (
          <p
            onClick={handleSignIn}
            className="text-lg text-white cursor-pointer"
          >
            Already on Netflix ? <span className="font-bold">Sign In </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
