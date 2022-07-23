import React from "react";

const Category = ({ children, title }) => {
  return (
    <button className="border h-12 rounded text-center hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500 duration-100 flex items-center space-x-2 px-8 py-1">
      <h4 className="capitalize">{title}</h4>
      {children}
    </button>
  );
};

export default Category;
