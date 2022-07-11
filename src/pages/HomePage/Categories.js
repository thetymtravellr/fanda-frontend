import React from "react";
import { GiHealthNormal } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineChildFriendly, MdPets } from "react-icons/md";
import { TbShoe } from "react-icons/tb";
import Category from "../../components/Category";

const Categories = () => {
  return (
    <section>
      <h1 className="text-3xl">Category</h1>
      <div className="flex space-x-8 my-4">
        <Category title="Clothing">
          <IoShirtOutline className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="Electronics">
          <HiOutlineDesktopComputer className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="Shoes">
          <TbShoe className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="Health">
          <GiHealthNormal className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="Pets">
          <MdPets className="text-2xl mx-auto mb-2" />
        </Category>
        <Category title="Children">
          <MdOutlineChildFriendly className="text-2xl mx-auto mb-2" />
        </Category>
      </div>
    </section>
  );
};

export default Categories;
