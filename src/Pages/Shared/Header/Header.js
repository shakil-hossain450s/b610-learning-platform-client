import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gray-100 shadow-md d-flex justify-between lg:px-12">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 bg-gray-100 shadow-lg rounded-box w-52"
            >
              <li>
                <Link className="text-[16px] font-medium">Home</Link>
              </li>
              <li>
                <Link className="text-[16px] font-medium">Courses</Link>
              </li>
              <li>
                <Link className="text-[16px] font-medium">Blog</Link>
              </li>
              <li>
                <Link className="text-[16px] font-medium">About</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-medium">
            Web Course
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link className="text-[16px] font-medium">Home</Link>
            </li>
            <li>
              <Link className="text-[16px] font-medium">Courses</Link>
            </li>
            <li>
              <Link className="text-[16px] font-medium">Blog</Link>
            </li>
            <li>
              <Link className="text-[16px] font-medium">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
