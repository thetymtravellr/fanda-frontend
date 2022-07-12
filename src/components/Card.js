import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="border-2 border-transparent h-[320px] w-60 text-center rounded overflow-hidden hover:border-blue-500  group">
      <div className="w-full h-10 flex justify-center space-x-8 ">
        <button className="opacity-0 group-hover:opacity-100 duration-300">
          <BiHeart className="text-xl " />
        </button>
        <button className="opacity-0 group-hover:opacity-100 duration-300">
          <BsCart2 className="text-xl" />
        </button>
      </div>
      <div className="h-[200px] bg-blue-300 relative">
        <Link to="/">
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 btn-primary text-white bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 z-10">
            Details
          </button>
        </Link>
        <img
          className="h-full w-full object-cover mx-auto group-hover:opacity-50 duration-200"
          src={product?.thumbnail}
          alt=""
        />
      </div>
      <div className="mt-2 h-full px-4">
        <h4 className="text-lg">{product?.title}</h4>
        <p className="font-bold mt-1 text-sm">
          <span className="text-yellow-500 mr-1">$</span>{product?.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
