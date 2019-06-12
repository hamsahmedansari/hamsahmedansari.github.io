import React from "react";

import Parallax from "../../components/parallax";
import About from "../../components/about";
import Brand from "../../components/brand";
import Feature from "../../components/feature";
import Portfolio from "../../components/portfolio";

const Home = () => {
  return (
    <React.Fragment>
      <Parallax />
      <About />
      <Brand />
      <Feature />
      <Portfolio />
    </React.Fragment>
  );
};

export default Home;
