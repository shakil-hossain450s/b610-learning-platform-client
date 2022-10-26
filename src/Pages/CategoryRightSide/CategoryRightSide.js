import React from 'react';
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
                        <Link to={`/course/${id}`} className='w-full mx-auto block'>
                            <button className="btn bg-orange-500 border-orange-500 w-[90%] mx-auto absolute bottom-2 ">Get Premium Access</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryRightSide;