import React from "react";
import './Home.css';
import HomeLogo from "../../../asstes/images/javascriptLogo.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="my-8">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-4xl my-3 font-semibold">Learn Javascript Begainner To Advance</h2>
        <img className="w-[40%]" src={HomeLogo} alt="" />
        <p className="text-[17x] my-3">The Interactive Learning Destination for aspiring and experince Developers</p>
        <Link to='/courses'>
          <button
            className="bg-orange-500 border-2 border-orange-500 px-8 py-2 rounded-full text-white font-semibold hover:bg-gray-300 hover:border-2 hover:border-gray-500 hover:text-black">
            Get Courses
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
