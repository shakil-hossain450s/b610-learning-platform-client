import React from 'react';
import { Link } from 'react-router-dom';

const SuccefullyChecked = () => {
    return (
        <div className='text-center my-[20%]'>
            <h2 className='text-5xl font-semibold my-2'>You Are Succefully Enrolled</h2>
            <p className='text-2xl font-semibold my-2'>Hope You are Doing Well & Go further. All The Best</p>
            <Link to='/'>
                <button
                    className='bg-orange-500 px-12 py-3 border-2 border-orange-500 rounded-lg text-xl text-white my-3 font-bold hover:bg-gray-200 hover:border-gray-600 duration-200 ease hover:text-black'>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default SuccefullyChecked;