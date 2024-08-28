import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Marquee from "./Marquee";
import About from "./About";
import Eyes from "./Eyes";

const Home = ({ progress }) => {
  return (
    <div>
      <div data-barba="container" data-barba-namespace="OCHI">
        <Navbar />
        <Landing progress={progress} />
        <Marquee />
        <About />
        <Eyes />
        {/* <About /> */}
      </div>
    </div>
  );
};

export default Home;
