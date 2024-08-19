import React from "react";
import "./styles/app.scss";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export default App;
