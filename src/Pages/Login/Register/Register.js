import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { providerLogin, createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleToSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        verifyUserEmail();
        toast.success('Please Verify Your Email');
        updateCurrentUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const updateCurrentUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }
    updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.log(error))
}

  const verifyUserEmail = () => {
    verifyEmail();
  }

  const handleToGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('Logged in Successfully')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleToGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('Logged in Successfully')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="mt-8 p-5 lg:w-[40%] lg:mx-auto mx-4 border-2 border-slate-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mt-3 mb-5">Create an account</h2>
        <form onSubmit={handleToSubmit} className="w-[90%] mx-auto">
          <div>
            <label htmlFor="name" className="text-[16px] font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-[100%] mt-2"
            />
          </div>
          <div>
            <label htmlFor="photoURL" className="text-[16px] font-medium">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="photoURL"
              className="input input-bordered w-[100%] mt-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[16px] font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-[100%] mt-2"
              required
            />
          </div>
          <div className="my-5">
            <label htmlFor="password" className="text-[16px] font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-[100%] mt-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 w-full py-3 my-3 rounded-full hover:bg-orange-600 duration-200 ease"
          >
            <span className="text-[18px] text-white font-semibold">
              Register
            </span>
          </button>
          <p className="text-center my-2">
            Already have an account?
            <Link to="/login" className="text-orange-500 underline ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="divider lg:w-[40%] lg:mx-auto mx-4 my-8">OR</div>
      <div className="lg:w-[40%] lg:mx-auto w-[85%] mx-5">
        <button
          onClick={handleToGoogleSignIn}
          className="border-2 border-base-300 bg-transparent w-full py-3 my-3 rounded-full hover:bg-gray-200 duration-200 ease"
        >
          <div className="flex items-center justify-center">
            <FaGoogle className="inline-block mr-5 text-2xl"></FaGoogle>
            <span className="text-xl font-semibold">Continue with Google</span>
          </div>
        </button>
      </div>
      <div className="lg:w-[40%] lg:mx-auto w-[85%] mx-5">
        <button
          onClick={handleToGithubSignIn}
          className="border-2 border-base-300 bg-transparent w-full py-3 my-3 rounded-full hover:bg-gray-200 duration-200 ease"
        >
          <div className="flex items-center justify-center">
            <FaGithub className="inline-block mr-5 text-2xl"></FaGithub>
            <span className="text-xl font-semibold">Continue with Github</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Register;
