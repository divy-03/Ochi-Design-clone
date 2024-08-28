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
      .from(".lTxt > li", {
        duration: .8,
        x: 100,
        scale: 1.1,
        stagger: .2,
        opacity: 0,
        ease: "power3.out",
      })
      .from(".masker div", { width: 0, ease: "power2.out", marginRight: 0, duration: 1 }, ".5")
      .pause();
  });

  useGSAP(() => {
    if (progress === 100) {
      gsap.delayedCall(2, () => tl.current.play());
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
      <ul className="lTxt">
        <li>For public and private companies</li>
        <li>From the first pitch to IPO</li>
        <li>
          <a href="#">
            <button>start the project</button>
            <MdArrowOutward />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
