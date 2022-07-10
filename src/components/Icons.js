import { motion } from "framer-motion";
import React from "react";

const Icons = ({item}) => {
  const { icon, className, duration, left } = item;
  return (
    <>
      {left ? (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration }}
          style={{ position: "absolute" }}
          className={className}
        >
          <img src={icon} alt="" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          style={{ position: "absolute" }}
          className={className}
        >
          <img src={icon} alt="" />
        </motion.div>
      )}
    </>
  );
};

export default Icons;
