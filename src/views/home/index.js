import React from "react";
import { connect } from "react-redux";
import Headers from "../../components/header";
const Home = () => {
  return (
    <div>
      <Headers />
    </div>
  );
};

export default connect()(Home);
