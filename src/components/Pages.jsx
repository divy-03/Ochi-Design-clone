import React from "react";
import Home from "./Home";

const Pages = ({ progress }) => {
  return (
    <div data-barba="wrapper">
      <Home progress={progress} />
    </div>
  );
};

export default Pages;
