/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token", token);
        const user = result.user;
        console.log("user", user);
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(email, credential);
        // ...
      });
  };
  return (
    <div className=" bg-slate-100 w-full lg:w-1/2">
      <div className="mx-4 my-2 lg:mx-40 lg:my-20">
        <div className="font-bold text-xl">Sign In</div>
        <p className="mb-4">Sign in to your account</p>
        <div className="flex justify-between">
          <div
            onClick={signInWithGoogle}
            className=" cursor-pointer px-6 rounded-full bg-white p-2 w-auto flex text-sm justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span>Sign in with Google</span>
          </div>
          <div className=" cursor-pointer px-6 rounded-full bg-white p-2 w-auto flex text-sm justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="grey"
              viewBox="0 0 26 26"
              width="26px"
              height="26px"
            >
              <path d="M 23.933594 18.945313 C 23.335938 20.269531 23.050781 20.863281 22.28125 22.03125 C 21.210938 23.667969 19.695313 25.707031 17.820313 25.71875 C 16.15625 25.734375 15.726563 24.632813 13.464844 24.652344 C 11.203125 24.660156 10.730469 25.738281 9.0625 25.722656 C 7.191406 25.707031 5.757813 23.867188 4.683594 22.238281 C 1.679688 17.664063 1.363281 12.300781 3.21875 9.449219 C 4.53125 7.425781 6.609375 6.238281 8.5625 6.238281 C 10.546875 6.238281 11.796875 7.328125 13.441406 7.328125 C 15.035156 7.328125 16.003906 6.234375 18.304688 6.234375 C 20.039063 6.234375 21.878906 7.179688 23.191406 8.816406 C 18.894531 11.167969 19.59375 17.304688 23.933594 18.945313 Z M 16.558594 4.40625 C 17.394531 3.335938 18.027344 1.820313 17.800781 0.277344 C 16.433594 0.371094 14.839844 1.242188 13.90625 2.367188 C 13.0625 3.394531 12.363281 4.921875 12.636719 6.398438 C 14.125 6.445313 15.664063 5.558594 16.558594 4.40625 Z" />
            </svg>
            <span>Sign in with apple</span>
          </div>
        </div>
        {loggedIn && <Navigate to="/dashboard" replace={true} />}
        <div className="bg-white p-12 flex flex-col mt-6 rounded-xl">
          <label htmlFor="email" className="mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mb-6 bg-gray-100 rounded-lg p-2"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mb-6 bg-gray-100 rounded-lg p-2"
            placeholder="*************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="google.com" className=" active:text-red-400 text-blue-500">
            Forgot password?
          </a>
          <button
            onClick={handleSubmit}
            className="bg-black text-white p-4 font-bold rounded-lg mt-4"
          >
            Sign In
          </button>
        </div>

        <div className="mx-12 my-4">
          Don't have an account?{" "}
          <Link to="/signup" className=" active:text-red-400 text-blue-500">
            Register here
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
