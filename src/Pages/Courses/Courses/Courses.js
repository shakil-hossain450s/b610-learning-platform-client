import React, { useEffect } from "react";
import { useState } from "react";
import CategoryRightSide from "../../CategoryRightSide/CategoryRightSide";
import CategoryLeftSide from "../../CatgoryLeftSide/CategoryLeftSide";

const Courses = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://learning-website-server-gold.vercel.app/catgories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);

  return (
    <div className="my-5">
      <h2 className="text-3xl text-center font-bold">Here Our Javascript Courses</h2>
      <div className="lg:flex my-12 mx-5 gap-12" >
        <div className="lg:w-[32%] mx-2 my-5">
          <h2 className="text-2xl font-semibold text-center my-2">Course Category</h2>
          <div className="border-2 bg-base-200 rounded-lg p-5 shadow-xl">
            {
              categories.map(category => <CategoryLeftSide
                key={category.id}
                category={category}
              ></CategoryLeftSide>)
            }
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="lg:w-[65%]  my-5">
          <h2 className="text-2xl font-semibold my-2">Course Details</h2>
          <div className="lg:grid grid-cols-2 gap-5">
            {
              categories.map(category => <CategoryRightSide
                key={category.id}
                category={category}
              ></CategoryRightSide>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
