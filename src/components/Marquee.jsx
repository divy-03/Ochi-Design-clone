import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { motion } from "framer-motion";
import React from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Marquee = () => {
  useGSAP(() => {
    gsap.to(".marqueeCont", {
      yPercent: -60,
      scrollTrigger: {
        trigger: ".aboutCont",
        start: "-120% 0",
        end: "0% 0%",
        scrub: 1,
        // markers: true,
      },
    });
  });
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed=".2"
      className="marqueeCont"
    >
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
