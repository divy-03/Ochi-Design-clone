import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="marqueeCont">
      <div className="marquee">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
