import React from "react";
import {
  HiOutlineHeart, HiOutlineInformationCircle,
  HiOutlineShoppingCart
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="h-64 w-64 text-center rounded overflow-hidden group relative">
      <div className="absolute z-10 w-full h-full bg-blue-600 opacity-0 group-hover:opacity-95  duration-200">
        <div className="w-full h-12 p-2">
          <p className=" text-white w-fit text-xs px-2 py-1">
            {product?.category[0]}
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center space-x-4">
          <Link to={`/product/${product?._id}`}>
            <button className="text-white text-2xl bg-blue-500 p-3 rounded-full">
              <HiOutlineShoppingCart />
            </button>
          </Link>
          <Link to={`/product/${product?._id}`}>
            <button className="text-white text-2xl bg-blue-500 p-3 rounded-full">
              <HiOutlineInformationCircle />
            </button>
          </Link>
          <Link to="/">
            <button className="text-white text-2xl bg-blue-500 p-3 rounded-full">
              <HiOutlineHeart />
            </button>
          </Link>
        </div>
      </div>
      <div className="h-48 bg-blue-300 relative">
        <img
          className="h-full w-full object-cover"
          src={product?.thumbnail}
          alt=""
        />
      </div>
      <div className="mt-2 h-full px-4 z-10 absolute text-left w-full group-hover:text-white">
        <h4 className="">{product?.title}</h4>
        <p className="font-medium mt-1 text-sm">
          <span className="text-yellow-500 mr-1">$</span>
          {product?.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
