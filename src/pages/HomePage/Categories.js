import React from "react";
import { GiHealthNormal } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineChildFriendly, MdPets } from "react-icons/md";
import { TbDeviceDesktop, TbShoe } from "react-icons/tb";
import Category from "../../components/Category";

const Categories = () => {
  return (
    <section>
      <h1 className="text-3xl">Category</h1>
      <div className="flex space-x-8 my-4">
        <Category>
          <IoShirtOutline className="text-4xl mx-auto" />
          <h4>Clothing</h4>
        </Category>
        <Category>
          <TbDeviceDesktop className="text-4xl mx-auto" />
          <h4>Electronics</h4>
        </Category>
        <Category>
          <TbShoe className="text-4xl mx-auto" />
          <h4>Shoes</h4>
        </Category>
        <Category>
          <GiHealthNormal className="text-4xl mx-auto" />
          <h4>Health</h4>
        </Category>
        <Category>
          <MdPets className="text-4xl mx-auto" />
          <h4>Pets</h4>
        </Category>
        <Category>
          <MdOutlineChildFriendly className="text-4xl mx-auto" />
          <h4>Children</h4>
        </Category>
      </div>
    </section>
  );
};

export default Categories;
