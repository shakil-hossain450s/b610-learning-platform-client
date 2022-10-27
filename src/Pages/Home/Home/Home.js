import React from "react";
import './Home.css';
import HomeLogo from "../../../asstes/images/Homelogo.jpeg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="my-8">
      <div className="flex justify-center items-center flex-col lg:px-0 px-3">
        <h2 className="lg:text-4xl text-3xl text-center lg:my-5 my-5 font-semibold">
          Learn Web Development Begainner To Advance
        </h2>
        <img className="lg:w-[40%] rounded-md border p-2 shadow-md" src={HomeLogo} alt="" />
        <p className="lg:text-[17x] text-xl text-center my-3">The Interactive Learning Destination for aspiring and experince Developers</p>
        <Link to='/courses'>
          <button
            className="lg:my-2 my-3 bg-orange-500 border-2 border-orange-500 px-8 py-2 rounded-full text-white font-semibold hover:bg-gray-300 hover:border-2 hover:border-gray-500 hover:text-black">
            Get Courses
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
