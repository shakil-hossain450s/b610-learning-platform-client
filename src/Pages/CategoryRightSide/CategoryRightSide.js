import React from 'react';
import { FaDollarSign, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryRightSide = ({ category }) => {
    const { image, name, id, price, lessons } = category;
    return (
        <div>
            <div className="card card-compact lg:w-80 h-96 w-full my-5 bg-base-100 relative shadow-2xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <p className='flex justify-between items-center text-[18px] font-medium mt-3'>
                            <span>Price: ${price}</span>
                            <span>Lessons: {lessons}</span>
                        </p>
                        <div className='absolute left-2 bottom-2 flex justify-center w-full'>
                            <Link to={`/course/${id}`}>
                                <button
                                    className='btn flex mx-5 hover:bg-gray-200 border-dark hover:text-black hover:border-2'>
                                    <span className='mr-2'>Details</span>
                                    <FaInfoCircle></FaInfoCircle>
                                </button>
                            </Link>
                            <Link to={`/course-details/${id}`}>
                                <button
                                    className='flex mx-5 btn hover:bg-gray-200 hover:text-black hover:border-2'>
                                    <span className='mr-2'>Premium</span>
                                    <FaDollarSign></FaDollarSign>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryRightSide;