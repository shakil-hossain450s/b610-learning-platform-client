import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import MainLayout from "../../layout/MainLayout";
import Blog from "../../Pages/Blog/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Checkout from "../../Pages/Others/Checkout/Checkout";
import ErrorCheck from "../../Pages/Others/ErrorCheck/ErrorCheck";
import SuccefullyChecked from "../../Pages/Others/SuccefullyCheckd/SuccefullyChecked";
import Profile from "../../Pages/Profile/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://learning-website-server-gold.vercel.app/course/${params.id}`)
      },
      {
        path: "/course-details/:id",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`https://learning-website-server-gold.vercel.app/course-details/${params.id}`)
      },
      {
        path: '/successfully-checked',
        element: <PrivateRoute><SuccefullyChecked></SuccefullyChecked></PrivateRoute>
      },
      {
        path: '/error-check',
        element: <PrivateRoute><ErrorCheck></ErrorCheck></PrivateRoute>
      }

    ],
  },
]);
