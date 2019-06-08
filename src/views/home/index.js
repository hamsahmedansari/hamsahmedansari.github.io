import React from "react";
import { connect } from "react-redux";

import Parallax from "../../components/parallax";
import About from "../../components/about";
import Brand from "../../components/brand";
import Feature from "../../components/feature";

const Home = () => {
  return (
    <React.Fragment>
      <Parallax />
      <About />
      <Brand />
      <Feature />
    </React.Fragment>
  );
};

export default connect()(Home);
