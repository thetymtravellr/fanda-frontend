import React from "react";
import { GrBaby } from "react-icons/gr";
import { IoMan, IoWoman } from "react-icons/io5";
import { Link } from "react-router-dom";
import Category from "../../components/Category";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <h1 className="text-3xl">Category</h1>
      <div className="flex flex-wrap space-x-4 my-4 items-end md:items-center md:space-y-0 space-y-4">
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
      <div className="w-full text-center mt-10">
        <Link className="" to="/">
          <button className="btn-custom border-blue-500  text-white bg-blue-500">
            See All Category
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
