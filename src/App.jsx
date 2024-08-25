import React from "react";
import "./styles/app.scss";
import Preloader from "./components/Preloader";
import useProgressTracker from "./progress";
import LocomotiveScroll from "locomotive-scroll";
import Pages from "./components/Pages";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const progress = useProgressTracker();

  return (
    <div className="wrapper" data-scroller="">
      <Preloader progress={progress} />
      <Pages progress={progress}/>
    </div>
  );
};

export default App;
