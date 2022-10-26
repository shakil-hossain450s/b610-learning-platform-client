import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegClock, FaArrowAltCircleLeft } from "react-icons/fa";

const CourseDetails = () => {
    const courseDetails = useLoaderData();

    const { id, about, description, name, image, price, video_length, lessons, instructor } = courseDetails;
    console.log(courseDetails);
    return (
        <section className='w-[80%] mx-auto border-2 my-8 px-12 py-8 rounded-lg'>
            <div className='relative'>
                <h1 className='text-4xl font-semibold my-5'>Course Details</h1>
                <div className='flex flex-col justify-center gap-5 px-12 '>
                    <h2 className='text-2xl font-semibold'>Course Name: {name}</h2>
                    <img className='w-[60%] mx-auto shadow-md rounded-md my-2' src={image} alt="" />
                    <div className='flex justify-center items-center'>
                        <p className='mx-5 font-medium text-xl'>Price: ${price}</p>
                        <p className='flex items-center mx-5 font-medium text-xl'>
                            <span className='mr-2'><FaRegClock></FaRegClock></span>
                            <span>{video_length}</span>
                        </p>
                        <p className='mx-5 font-medium text-xl'>Total Lessons: {lessons}</p>
                    </div>
                    <div className='my-3'>
                        <h4 className='text-2xl font-medium'>Course Description</h4>
                        <div className='divider my-1'></div>
                        <p className='text-justify text-[17px] font-medium'>{description}</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium mb-3'>What You’ll Learn</h3>
                        <div className='divider my-1'></div>
                        <div className='pl-5 font-medium'>
                            {
                                about.map(p => <li>{p}</li>)
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-medium mb-3'>About the Instructor</h2>
                        <div className='divider my-1'></div>
                        <p className='text-justify text-[17px] font-medium'>{instructor}</p>
                    </div>
                    <Link to={`/courses`}>
                        <button className='absolute top-2 right-3 text-2xl tooltip tooltip-bottom' data-tip="Previous">
                            <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;