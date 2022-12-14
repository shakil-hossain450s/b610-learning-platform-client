import React from 'react';
import { Link } from 'react-router-dom';

const ErrorCheck = () => {
    return (
        <div className='border-2 p-5 shadow-lg lg:w-[35%] lg:mx-auto mx-5 lg:my-[17%] my-[45%]'>
            <h2 className='text-center text-2xl font-semibold'>Cancel Successfully</h2>
            <div className='divider my-2'></div>
            <h4 className='text-center text-xl'>Please Select At Least a <Link className='underline' to='/courses'>Course</Link></h4>
        </div>
    );
};

export default ErrorCheck;