import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLeftSide = ({ category }) => {
    const {name, id} = category;
    return (
        <div>
            <ul className="menu bg-base-200 rounded-box p-2">
                <li className='font-medium'><Link to={`/course/${id}`}>{name}</Link></li>
            </ul>
        </div>
    );
};

export default CategoryLeftSide;