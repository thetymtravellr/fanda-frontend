import React from "react";
import cartIcon from "../../assets/images/icons/cart.png";
import clothIcon from "../../assets/images/icons/cloths.png";
import saleIcon from "../../assets/images/icons/sale.png";
import Icons from "../../components/Icons";

const Hero = () => {
  return (
    <section className="p-4 md:p-12">
      <div className="content min-h-[40vh] w-full max-w-7xl mx-auto bg-teal-100 rounded-3xl relative grid place-content-center">
        <Icons className="top-16 left-16 w-12" icon={cartIcon} left={true} duration={.5}/>
        <Icons className="top-12 right-20 w-12" icon={clothIcon} duration={1}/>
        <Icons className="bottom-12 left-24 w-12" icon={saleIcon} left={true} duration={.75}/>
        <div className="w-full max-w-2xl mx-auto text-center z-10 lg:bg-black/0 bg-black/20 lg:backdrop-blur-none backdrop-blur-sm rounded-3xl p-8">
          <h1 className="text-4xl font-bold">
            Grab any 3 items and get 50% off! offer for limited time
          </h1>
          <button className="mt-8 bg-black px-4 py-2 rounded-lg text-white">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
