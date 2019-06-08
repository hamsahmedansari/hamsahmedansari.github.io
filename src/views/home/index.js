import React from "react";
import { connect } from "react-redux";

import Parallax from "../../components/parallax";
import About from "../../components/about";

const Home = () => {
  return (
    <React.Fragment>
      <Parallax />
      <About />
    </React.Fragment>
  );
};

export default connect()(Home);
