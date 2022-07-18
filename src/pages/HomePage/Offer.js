import React, { useRef } from "react";
import Icons from "../../components/Icons";
import useIsVisible from "../../hooks/useIsVisible";
import { icons } from "../../utilities/banner-icons";

const Offer = () => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  return (
    <section
      ref={elemRef}
      className="max-w-7xl mx-auto py-4 md:py-12 overflow-hidden"
    >
      {isVisible && (
        <div className="content min-h-[40vh] w-full max-w-7xl mx-auto bg-teal-100 rounded-3xl relative grid place-content-center">
          {icons.map((item) => (
            <Icons item={item} />
          ))}
          <div className="w-full max-w-2xl mx-auto text-center z-10 lg:bg-black/0 bg-black/20 lg:backdrop-blur-none backdrop-blur-sm rounded-3xl p-8">
            <h1 className="text-4xl font-bold text-black">
              Grab any 3 items and get 50% off!
              <br /> offer for limited time
            </h1>
            <button className="mt-8 btn-custom text-white border-teal-500 hover:border-teal-500 bg-teal-500">
              Shop now
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Offer;
