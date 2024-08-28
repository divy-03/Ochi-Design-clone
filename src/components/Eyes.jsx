import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);

  useEffect(() => {
    const eye1 = document.getElementById("eye1");
    const eye2 = document.getElementById("eye2");

    // Function to calculate bounding rects and update the angles
    const updateEyePositions = () => {
      const exy1 = eye1.getBoundingClientRect();
      const exy2 = eye2.getBoundingClientRect();

      const handleMouseMove = (e) => {
        // const dx1 = e.clientX - exy1.right;
        // const dy1 = e.clientY - exy1.top;
        // const dx2 = e.clientX - exy2.right;
        // const dy2 = e.clientY - exy2.top;

        // TODO
        const dx1 = e.clientX - exy1.right + exy1.width/2;
        const dy1 = e.clientY - exy1.top - exy1.height/2;
        const dx2 = e.clientX - exy2.right + exy2.width/2;
        const dy2 = e.clientY - exy2.top - exy2.height/2;

        const angle1 = Math.atan2(dy1, dx1) * (180 / Math.PI);
        const angle2 = Math.atan2(dy2, dx2) * (180 / Math.PI);

        setRotate1(angle1 - 180);
        setRotate2(angle2 - 180);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    };

    // Call updateEyePositions initially and on scroll
    updateEyePositions();
    window.addEventListener("scroll", updateEyePositions);

    // Cleanup scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", updateEyePositions);
    };
  }, []);

  // useGSAP(() => {
  //   gsap.from(".eyeCont", {
  //     yPercent: 50,
  //     scrollTrigger: {
  //       trigger: ".eyeCont",
  //       start: "100% 0",
  //       end: "0% 0",
  //       scrub: 1,
  //       markers: true,
  //     },
  //   })
  // })

  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed=".2"
      className="eyeCont"
    >
      <div className="eyeBox">
        <div className="eye">
          <div className="eyeBall" id="eye1">
            <div
              className="pupiLine"
              style={{ transform: `rotate(${rotate1}deg)` }}
            >
              <div className="pupil"></div>
            </div>
          </div>
        </div>
        <div className="eye">
          <div className="eyeBall" id="eye2">
            <div
              className="pupiLine"
              style={{ transform: `rotate(${rotate2}deg)` }}
            >
              <div className="pupil"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
