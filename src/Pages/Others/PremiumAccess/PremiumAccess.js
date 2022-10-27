import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const PremiumAccess = () => {
    const courseDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    const { id, about, description, name, image, price, video_length, lessons, instructor } = courseDetails;
    console.log(courseDetails, user)
    return (
        <div className='border-2 rounded-md p-5 lg:mx-8 mx-3 mt-8 mb-[75px]'>
            <h2
                className='text-center lg:text-4xl text-2xl font-semibold'>
                You Get The Premium Access
                <p className='text-[16px]'>Now You Can Enjoy it!!!</p>
            </h2>
            <div className='divider my-1'></div>
            <div className='lg:flex flex flex-col-reverse justify-between lg:px-52 py-8'>
                <div className='mb-3'>
                    <h3 className='text-3xl mb-4 underline font-medium'>Student Information</h3>
                    <div className='ml-2'>
                        <h2
                            className='text-xl'>
                            <span
                                className='font-medium mr-2' >
                                Student Name:
                            </span>
                            {user?.displayName}
                        </h2>
                        <h5
                            className='text-[17px]'>
                            <span
                                className='font-medium mr-2' >
                                Email:
                            </span>
                            <span
                                className='font-medium'>
                                {user?.email}
                            </span>
                        </h5>
                        <hr className='w-[80%] my-3 border-2' />
                        <h3 className='text-xl font-medium'>Course Information</h3>
                        <h3
                            className='text-[16px]'>
                            <span
                                className='font-medium mr-2' >
                                Course Name:
                            </span>
                            {name}
                        </h3>
                        <h5>
                            <span
                                className='font-medium mr-2' >
                                Course Cost:
                            </span>
                            ${price}
                        </h5>
                        <p>
                            <span
                                className='font-medium mr-2' >
                                Total Lessons:
                            </span>
                            {lessons}</p>
                        <p>
                            <span
                                className='font-medium mr-2' >
                                Video Duration:
                            </span>
                            {video_length}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    <img className='rounded-full ' src={user?.photoURL} alt="" />
                    <p>User Photo</p>
                </div>
            </div>
        </div>
    );
};

export default PremiumAccess;