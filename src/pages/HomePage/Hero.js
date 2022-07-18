import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/products/tshirt.png";

const Hero = () => {
  return (
    <section className="min-h-[75vh] w-full bg-zinc-800">
      <div className="w-full flex items-center">
        <div>
          <img className="max-w-2xl" src={heroImage} alt="" />
        </div>
        <div>
          <h1 className="text-6xl text-white">
            <span className="text-orange-500 font-caveat font-bold text-7xl">
              Fanda
            </span>{" "}
            <br /> Exclusive Designs
          </h1>
          <Link to="/exclusive">
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
