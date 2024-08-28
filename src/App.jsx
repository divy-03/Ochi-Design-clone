import React, { useEffect, useRef } from "react";
import "./styles/app.scss";
import Preloader from "./components/Preloader";
import useProgressTracker from "./progress";
import LocomotiveScroll from "locomotive-scroll";
import Pages from "./components/Pages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locomotiveScroll = new LocomotiveScroll();
  const progress = useProgressTracker();

  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from(".page", {
        yPercent: 100,
        duration: 1,
      })
      .pause();
  });

  useGSAP(() => {
    if (progress === 100) {
      gsap.delayedCall(0.7, () => tl.current.play());
    }
  }, [progress]);

  return (
    <div className="wrapper" data-scroller="">
      <Preloader progress={progress} />

      <div className="page">
        <Pages progress={progress} />
      </div>
    </div>
  );
};

export default App;
