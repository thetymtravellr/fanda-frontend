import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/products/tshirt.png";

const Hero = () => {
  return (
    <section className=" w-full bg-zinc-800">
      <div className="w-full min-h-[75vh] flex items-center justify-center lg:justify-start">
        <div className="hidden lg:block">
          <img className="max-w-2xl" src={heroImage} alt="" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="sm:text-6xl text-4xl text-white">
            <span class="highlight-container relative inline-block ">
              <span class="highlight relative font-caveat">#Fanda</span>
            </span>
            <br />
            <span className="text-white font-bold sm:text-7xl">
              Exclusive Designs
            </span>
          </h1>
          <Link to="/store">
            <button className="btn-custom text-white bg-orange-500 border-orange-500 mt-6">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
