import React from "react";
import { connect } from "react-redux";

import Parallax from "../../components/parallax";

const Home = () => {
  return (
    <React.Fragment>
      <Parallax />
    </React.Fragment>
  );
};

export default connect()(Home);
