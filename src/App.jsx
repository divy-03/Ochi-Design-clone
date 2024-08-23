import React, { useEffect, useState } from "react";
import "./styles/app.scss";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import useProgressTracker from "./progress";

const App = () => {
  const progress = useProgressTracker();

  return (
    <div>
      <Preloader progress={progress} />
      {/* {showHome && <Home />} */}
      <Home />
    </div>
  );
};

export default App;
