import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  return (
    <div className="landing">
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
