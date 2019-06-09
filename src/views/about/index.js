import React from "react";
import Banner from "../../components/banner";
import AboutComponent from "../../components/about";
import Brand from "../../components/brand";

const About = props => {
  return (
    <React.Fragment>
      <Banner pages={[{ name: "About", link: "/about" }]} title="About Me" />
      <AboutComponent />
      <Brand />
    </React.Fragment>
  );
};

export default About;
