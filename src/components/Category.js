import React from 'react';
import { Link } from "react-router-dom";

const Category = ({ children }) => {
    return (
        <Link to='/' className="border p-4 rounded-lg text-center w-28 hover:bg-gray-50 hover:text-teal-500 duration-100">
            {children}
        </Link>
    );
};

export default Category;