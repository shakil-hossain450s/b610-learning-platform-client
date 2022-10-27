import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='border-2 rounded-md p-5 lg:mx-8 mx-3 mt-8 mb-[75px]'>
                <h2
                    className='text-center lg:text-4xl text-2xl font-semibold'>
                    Profile
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
                            <h2
                                className='text-xl'>
                                <span
                                    className='font-medium mr-2' >
                                    User Uid:
                                </span>
                                {user?.uid}
                            </h2>
                            <hr className='w-[80%] my-3 border-2' />

                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center mb-5'>
                        <img className='rounded-full ' src={user?.photoURL} alt="" />
                        <p>User Photo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;