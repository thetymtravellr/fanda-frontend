import React from 'react';
import { Link } from "react-router-dom";

const Category = ({ children, title }) => {
    return (
        <Link to='/' className="border-2 p-4 rounded-lg text-center w-28 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500 duration-100 grid place-content-center">
            {children}
            <h4>{title}</h4>
        </Link>
    );
};

export default Category;