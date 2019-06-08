import React from "react";
import Layout from "./Layout";

import "animate.css/animate.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("====================================");
    console.log(this.props);
    console.log("====================================");
    return <Layout />;
  }
}

export default App;
