import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

const Card = () => {

  return (
    <div
      className="border h-[360px] w-60 text-center shadow rounded overflow-hidden relative group"
    >
      <div className="w-full absolute h-10 flex justify-evenly items-center -top-20 group-hover:top-0 duration-150 bg-gray-100">
        <button>
          <BiHeart className="text-xl" />
        </button>
        <button>
          <BsCart2 className="text-xl" />
        </button>
      </div>
      <img
        className="h-[250px] mx-auto"
        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        alt=""
      />
      <div className="">
        <h4 className="text-lg">Shirt</h4>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
        <p className="font-bold">$8.99</p>
        <p>rating</p>
      </div>
    </div>
  );
};

export default Card;
