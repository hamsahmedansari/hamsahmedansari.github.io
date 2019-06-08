import React from "react";
import { connect } from "react-redux";

import Parallax from "../../components/parallax";
import About from "../../components/about";
import Brand from "../../components/brand";

const Home = () => {
  return (
    <React.Fragment>
      <Parallax />
      <About />
      <Brand />
    </React.Fragment>
  );
};

export default connect()(Home);
