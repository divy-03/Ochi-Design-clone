import React, { useState, useRef } from "react";
import gsap from "gsap";
import { MdArrowOutward } from "react-icons/md";
import { useGSAP } from "@gsap/react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const tl = useRef(null); // Reference to the GSAP timeline

  useGSAP(() => {
    // Initialize the GSAP timeline once
    tl.current = gsap.timeline({ paused: true }).to(".btn > div", {
      fontSize: "1.5vw",
      duration: 0.2,
      ease: "back.out",
    });

    // Cleanup function to kill the timeline on unmount
    return () => {
      tl.current.kill();
    };
  }, []);

  useGSAP(() => {
    // Play or reverse the timeline based on hover state
    if (isHovered) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isHovered]);

  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed=""
      className="aboutCont"
    >
      <div>
        <p>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell products, explain complex
          ideas, and hire great people.
        </p>
      </div>
      <div>
        <div>
          <h2>Our Approach</h2>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="btn"
          >
            Read More
            <div>
              <MdArrowOutward />
            </div>
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
