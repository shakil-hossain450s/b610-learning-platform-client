import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Checkout = () => {
    const navigate = useNavigate();

    const handleToCheck = () => {
        toast.success("Successfully Enrolled");
        navigate("/successfully-checked");
    }

    const handleToError = () => { 
        toast.error("Course Checkout Cancel");
        navigate('/error-check');
    }

    const data = useLoaderData();
    return (
        <div className='border-2 p-5 shadow-lg lg:w-[35%] lg:mx-auto mx-5 my-[17%]'>
            <div>
                <h2 className='text-2xl lg:text-center mb-2'>Check Out</h2>
                <div className='divider my-1'></div>
                <div className='lg:flex justify-between items-center bg-base-300 p-4 rounded'>
                    <h6 className="lg:text-center font-medium my-2">
                        <p className='font-medium'>{data?.name}</p>
                        <p>Price: ${data?.price}</p>
                    </h6>
                    <h6 className='lg:text-center font-medium my-2'>
                        <p className='font-medium'>Total Lessons</p>
                        <p>{data?.lessons}</p>
                    </h6>
                    <div className='flex my-2'>
                        <button
                            onClick={handleToCheck}
                            className='bg-green-600 px-3 py-1 rounded-full text-white hover:bg-green-700 mr-2'>
                            Chekout
                        </button>
                        <button
                            onClick={handleToError}
                            className='bg-red-600 px-3 py-1 rounded-full text-white hover:bg-red-800 ml-2'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;