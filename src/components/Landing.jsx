// import { motion } from "framer-motion";
import React, { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Landing = (props) => {
  const { progress } = props;

  const tl = useRef(null);
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from(".landing", {
        duration: 1,
        yPercent: 100,
        opacity: 0,
        ease: "power3.out",
      })
      .from(".masker div", { width: 0, ease: "power2.out", marginRight: 0 })
      .pause();
  });

  useGSAP(() => {
    if (progress === 100) {
      gsap.delayedCall(1, () => tl.current.play());
    }
  }, [progress]);
  return (
    <div
      // data-scroll
      // data-scroll-section
      // // data-scroll-offset="0, -100%"
      // data-scroll-speed="-.8"
      // // data-scroll-position="top"
      // data--scroll-section-id="section0"
      // data-scroll-section-inview=""
      className="landing"
    >
      <div className="landMain">
        {["we create", "eye-opening", "presentations"].map((item, idx) => (
          <div className="masker" key={idx}>
            {idx == 1 && <div></div>}
            <h2>{item}</h2>
          </div>
        ))}
      </div>
      <div className="lTxt">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <a href="#">
          <button>start the project</button>
          <MdArrowOutward />
        </a>
      </div>
    </div>
  );
};

export default Landing;
