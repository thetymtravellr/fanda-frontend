import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full hero-bg">
      <div className="container">
        <div className="w-full min-h-[75vh] flex items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="flex flex-col text-white uppercase">
              <span className="text-6xl ">
                Create your
              </span>
              <span className="text-8xl">
                individuality
              </span>
            </h1>
            <Link to="/store" className="font-roboto-condensed leading-none py-4 px-10 border-2 rounded uppercase duration-300 text-white bg-transparent border-white flex items-center justify-center gap-1 w-fit hover:bg-white hover:text-black">
              Shop now <FaChevronRight size="12" style={{ marginBottom: "4px" }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
