import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { HiStar } from "react-icons/hi";

const Card = () => {
  return (
    <div className="border-2 h-[320px] w-60 text-center shadow rounded overflow-hidden hover:border-blue-500">
      <div className="w-full h-10"></div>
      <div className="h-[150px] bg-blue-300">
        <img
          className="h-full w-full object-cover mx-auto"
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
          alt=""
        />
      </div>
      <div className="mt-2 group-hover:bg-blue-200 h-full group-hover:text-blue-500 duration-200 px-4">
        <h4 className="text-lg">Shirt</h4>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
        <div className="w-full mt-2">
          <p className="text-center">
            <HiStar className="mx-auto text-yellow-500" />
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <button className="">
            <BiHeart className="text-xl " />
          </button>
          <p className="font-bold"><span className="text-yellow-500 mr-1">$</span>8.99</p>
          <button className="">
            <BsCart2 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
