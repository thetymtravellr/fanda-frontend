import React, { useRef } from "react";
import CountUp from "react-countup";
import useIsVisible from "../../hooks/useIsVisible";

const Stats = () => {

  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  return (
    <section ref={elemRef}>
      {isVisible && (
        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      )}
    </section>
  );
};

export default Stats;
