import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegClock, FaDownload, FaChevronCircleLeft } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from '../Others/PDFFile';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { pdf, setPdf } = useContext(AuthContext);
    useEffect(() => {
        setPdf(courseDetails);
    }, [])

    const { id, about, description, name, image, price, video_length, lessons, instructor } = courseDetails;
    return (
        <section className='lg:w-[80%] lg:mx-auto mx-2 border-2 my-8 lg:px-12 px-5 py-8 rounded-lg'>
            <Link to={`/courses`}>
                <button className='text-2xl tooltip tooltip-bottom' data-tip="Previous">
                    <FaChevronCircleLeft></FaChevronCircleLeft>
                </button>
            </Link>
            <div className=''>
                <h1 className='text-4xl font-semibold my-5 lg:text-start text-center '>Course Details</h1>
                <div className='flex flex-col justify-center items-center gap-5 lg:px-12 '>
                    <h2 className='lg:text-2xl text-xl font-semibold'>Course Name: {name}</h2>
                    <img className='lg:w-[60%] mx-auto shadow-md rounded-md my-2' src={image} alt="" />
                    <div className='flex lg:justify-center justify-between gap-4 items-center flex-wrap'>
                        <p className='lg:mx-5 mx-2 font-medium text-xl'>Price: ${price}</p>
                        <p className='flex items-center lg:mx-5 mx-2 font-medium text-xl'>
                            <span className='mr-2'><FaRegClock></FaRegClock></span>
                            <span>{video_length}</span>
                        </p>
                        <p className='lg:mx-5 mx-2 font-medium text-xl'>Total Lessons: {lessons}</p>
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
                    <div className=' mx-auto '>
                        <PDFDownloadLink document={<PDFFile></PDFFile>} fileName="FORM" >
                            {({ loading }) =>
                            (loading ?
                                "Loading..." :
                                <button className='btn hover:bg-gray-200 hover:text-black hover:border-2'>
                                    <span className='mr-2'>Download</span>
                                    <FaDownload></FaDownload>
                                </button>)}
                        </PDFDownloadLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;