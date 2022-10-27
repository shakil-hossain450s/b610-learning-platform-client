import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
  const { providerLogin, signIn, setLoading } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleToSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          navigate(from, { replace: true });
        }
        else {
          toast.error('Please Verify Your Email. Your Email is not verified')
        }

      })
      .catch(error => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false)
      })

  }

  // Google Sign In
  const handleToGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Github Sign In
  const handleToGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleToChecked = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <div className="mt-8 p-5 lg:w-[40%] lg:mx-auto mx-4 border-2 border-slate-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold my-3">Welcome Back</h2>
        <form onSubmit={handleToSubmit} className="w-[90%] mx-auto">
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
          <div>
            <input onClick={handleToChecked} type="checkbox" />
            <label className="mx-2" htmlFor="rememberme">
              Remember Me
            </label>
          </div>
          <button
            disabled={!accepted}
            type="submit"
            className="bg-orange-500 w-full py-3 my-3 rounded-full hover:bg-orange-600 duration-200 ease"
          >
            <span className="text-[18px] text-white font-semibold">Login</span>
          </button>
          <p className="text-center my-2">
            Don't have an accout?{" "}
            <Link to="/register" className="text-orange-500 underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <div className="divider lg:w-[40%] lg:mx-auto mx-4 my-8">OR</div>
      <div className="lg:w-[40%] lg:mx-auto w-[85%] mx-5">
        <button
          onClick={handleToGoogleSignIn}
          className="border-2 border-base-300 bg-transparent w-full py-3 my-3 rounded-full hover:bg-gray-400 duration-200 ease"
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
          className="border-2 border-base-300 bg-transparent w-full py-3 my-3 rounded-full hover:bg-gray-400 duration-200 ease"
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

export default Login;
