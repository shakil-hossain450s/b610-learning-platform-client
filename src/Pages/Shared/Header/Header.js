import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);

  const handleToLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="sticky lg:top-0 top-[-5px] left-0 z-20">
      <div className="navbar bg-gray-100 shadow-md flex justify-between lg:px-12">
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
              <li className="mr-2">
                <Link to="/" className="text-[16px] font-medium">
                  Home
                </Link>
              </li>
              <li className="mr-2">
                <Link to="/courses" className="text-[16px] font-medium">
                  Courses
                </Link>
              </li>
              <li className="mr-2">
                <Link to="/blog" className="text-[16px] font-medium">
                  Blog
                </Link>
              </li>
              <li className="mr-2">
                <Link to="/faq" className="text-[16px] font-medium">
                  FAQ
                </Link>
              </li>
              {
                user?.uid ?
                  <>
                    <li><span className="my-auto font-semibold text-[16px]">{user?.displayName}</span></li>
                    <li>
                      <Link onClick={handleToLogOut} className="text-[16px] font-medium">
                        Logout
                      </Link>
                    </li>
                  </>
                  :
                  <>
                    <li><Link className="text-[16px] font-medium" to='/login'>Login</Link></li>
                    <li><Link className="text-[16px] font-medium" to='/register'>Register</Link></li>
                  </>
              }
              <Link to="/profile" className="tooltip tooltip-bottom" data-tip={user?.displayName ? user?.displayName : 'Profile'}>
                {
                  user?.photoURL ?
                    <li><img style={{ borderRadius: '50%' }} className="w-[45px] px-2 ml-2" src={user?.photoURL} alt="" /></li>
                    :
                    <FaUserCircle className="inline-block pt-[7px] px-2 text-[40px]"></FaUserCircle>
                }
              </Link>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-medium">
            JavaScript Course
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mr-2">
              <Link to="/" className="text-[16px] font-medium">
                Home
              </Link>
            </li>
            <li className="mr-2">
              <Link to="/courses" className="text-[16px] font-medium">
                Courses
              </Link>
            </li>
            <li className="mr-2">
              <Link to="/blog" className="text-[16px] font-medium">
                Blog
              </Link>
            </li>
            <li className="mr-2">
              <Link to="/faq" className="text-[16px] font-medium">
                FAQ
              </Link>
            </li>
            {
              user?.uid ?
                <>
                  <span className="my-auto font-semibold ml-5">{user?.displayName}</span>
                  <li>
                    <Link onClick={handleToLogOut} className="ml-5 text-[16px] font-medium">
                      Logout
                    </Link>
                  </li>
                </>
                :
                <>
                  <li><Link className="text-[16px] mx-2 font-medium" to='/login'>Login</Link></li>
                  <li><Link className="text-[16px] mx-2 font-medium" to='/register'>Register</Link></li>
                </>
            }
            <Link to="/profile" className="tooltip tooltip-bottom" data-tip={user?.displayName ? user?.displayName : 'Profile'}>
              {
                user?.photoURL ?
                  <img style={{ borderRadius: '50%' }} className="w-[45px] mt-1 px-1 ml-3" src={user?.photoURL} alt="" />
                  :
                  <FaUserCircle className="inline-block my-auto px-2 text-[40px]"></FaUserCircle>
              }
            </Link>
            {
              theme ?
                <button className="text-xl ml-3 my-auto" onClick={() => setTheme(!theme)}><FaSun></FaSun></button>
                :
                <button className="text-xl ml-3 my-auto" onClick={() => setTheme(!theme)}><FaMoon></FaMoon></button>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
