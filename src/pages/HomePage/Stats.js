import React, { useRef } from "react";
import CountUp from "react-countup";
import { BsBox } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import useIsVisible from "../../hooks/useIsVisible";

const Stats = () => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  return (
    <section ref={elemRef} className="my-10">
      <div className="flex justify-center space-x-6">
        {isVisible && (
          <>
            <CountUp end={45}>
              {({ countUpRef }) => (
                <div className="border flex items-center space-x-4 text-right px-6 py-4">
                  <div>
                    <p className="text-2xl font-extrabold"><span ref={countUpRef} />+</p>
                    <p className="text-gray-400 font-medium uppercase">Countries</p>
                  </div>
                  <div>
                    <FaGlobeAsia className="text-5xl text-blue-500" />
                  </div>
                </div>
              )}
            </CountUp>
            <CountUp end={7500}>
              {({ countUpRef }) => (
                <div className="border flex items-center space-x-4 text-right px-6 py-4">
                  <div>
                  <p className="text-2xl font-extrabold"><span ref={countUpRef} />+</p>
                    <p className="text-gray-400 font-medium uppercase">Employees</p>
                  </div>
                  <div>
                    <HiOutlineUserGroup className="text-5xl text-teal-500" />
                  </div>
                </div>
              )}
            </CountUp>
            <CountUp end={100}>
              {({ countUpRef }) => (
                <div className="border flex items-center space-x-4 text-right px-6 py-4">
                  <div>
                  <p className="text-2xl font-extrabold"><span ref={countUpRef} />+</p>
                    <p className="text-gray-400 font-medium uppercase">Products Sold</p>
                  </div>
                  <div>
                    <BsBox className="text-5xl text-pink-500" />
                  </div>
                </div>
              )}
            </CountUp>
          </>
        )}
      </div>
    </section>
  );
};

export default Stats;
