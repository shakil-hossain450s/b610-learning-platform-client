import React from 'react';
import { Link } from 'react-router-dom';

const CategoryRightSide = ({ category }) => {
    const { image, name, id } = category;
    return (
        <div>
            <div className="card card-compact lg:w-80 h-80 w-full my-5 bg-base-100 relative shadow-2xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/course/${id}`} className='w-full mx-auto block'>
                            <button className="btn bg-orange-500 border-orange-500 w-[90%] mx-auto absolute bottom-2 ">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryRightSide;