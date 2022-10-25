import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
  return (
    <div>
      <div className="mt-8 p-5 lg:w-[40%] lg:mx-auto mx-4 border-2 border-slate-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mt-3 mb-5">Create an account</h2>
        <form className="w-[90%] mx-auto">
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
            />
          </div>
          <div className="my-5">
            <label htmlFor="passwors" className="text-[16px] font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-[100%] mt-2"
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
            <Link to="/login" className="text-orange-500 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="divider lg:w-[40%] lg:mx-auto mx-4 my-8">OR</div>
      <div className="w-[40%] mx-auto">
        <button className="border-2 border-base-300 bg-transparent w-full py-3 my-3 rounded-full hover:bg-gray-200 duration-200 ease">
          <div className="flex items-center justify-center">
            <FaGoogle className="inline-block mr-5 text-2xl"></FaGoogle>
            <span className="text-xl font-semibold">Continue with Google</span>
          </div>
        </button>
      </div>
      <div className="w-[40%] mx-auto">
        <button className="border-2 border-base-300 bg-transparent w-full py-3 my-3 rounded-full hover:bg-gray-200 duration-200 ease">
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
