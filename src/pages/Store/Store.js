import React from "react";
import { GrBaby } from "react-icons/gr";
import { IoMan, IoWoman } from "react-icons/io5";
import { useSelector } from "react-redux";
import Card from "../../components/Card";
import Category from "../../components/Category";

const Store = () => {
  const { products } = useSelector((state) => state.allProducts);
  return (
    <div className="">
      <div className="bg-gray-50 h-32 grid place-content-center px-8">
        <h1 className="text-3xl text-black text-center uppercase font-bold">Store</h1>
      </div>
      <div className="max-w-7xl mx-auto mt-6">
        <div className="mb-4 flex space-x-2">
          <Category title="man">
            <IoMan className="text-xl mx-auto mb-2" />
          </Category>
          <Category title="women">
          <IoWoman className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="children">
          <GrBaby className="text-2xl mx-auto mb-2" />
        </Category>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
          {products?.map((product) => (
            <Card product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
