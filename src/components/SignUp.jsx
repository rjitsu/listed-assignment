import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
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
  return (
    <div className="bg-neutral-100 h-screen">
      <div className="font-bold w-1/2 m-auto p-12 pl-0 pb-0 text-2xl">
        SignUp
      </div>

      {loggedIn && <Navigate to="/dashboard" replace={true} />}
      <div className="bg-white p-12 flex flex-col mt-6 rounded-xl w-1/2 m-auto">
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
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
