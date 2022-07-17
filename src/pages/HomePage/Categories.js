import React from "react";
import { BsBasket } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineChildFriendly, MdPets } from "react-icons/md";
import { TbShoe } from "react-icons/tb";
import { Link } from "react-router-dom";
import Category from "../../components/Category";

const Categories = () => {
  return (
    <section>
      <h1 className="text-3xl">Category</h1>
      <div className="flex flex-wrap justify-center space-x-8 my-4 items-end md:items-center md:space-y-0 space-y-4">
        <Category title="clothing" >
          <IoShirtOutline className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="electronics">
          <HiOutlineDesktopComputer className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="shoes">
          <TbShoe className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="health">
          <GiHealthNormal className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="pets">
          <MdPets className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="children">
          <MdOutlineChildFriendly className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="groceries">
          <BsBasket className="text-2xl mx-auto mb-2" />
        </Category>
      </div>
      <div className="w-full text-center mt-10">
        <Link className="" to="/">
          <button className="btn-primary border-blue-400  text-blue-400 hover:bg-blue-500 hover:border-blue-500 bg-transparent">
            See All Category
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Categories;
