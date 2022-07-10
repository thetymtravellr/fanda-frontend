import React from "react";

const Icons = ({ icon, className }) => {
  return (
    <div style={{ position: "absolute" }} className={className}>
      <img src={icon} alt="" />
    </div>
  );
};

export default Icons;
