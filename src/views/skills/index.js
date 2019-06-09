import React from "react";
import Banner from "../../components/banner";
import FloatingBox from "../../components/floatingBox";
import Skill from "../../components/skill";

const Skills = props => {
  return (
    <React.Fragment>
      <Banner pages={[{ name: "Skills", link: "/skill" }]} title="Skills" />
      <section className="container skills mt-5">
        <div className="d-flex justify-content-around flex-wrap">
          <div className="item">
            <FloatingBox title="UI/UX" speed="1000" color="#6a4beb" />
          </div>
          <div className="item">
            <FloatingBox title="Javscript" speed="1000" color="#876eef" />
          </div>
          <div className="item">
            <FloatingBox title="Node.JS" speed="1000" color="#a491f3" />
          </div>
          <div className="item">
            <FloatingBox title="React Native" speed="1000" color="#c1b5f7" />
          </div>
        </div>

        <div class="section-top-border">
          <h3 class="mb-30 title_color">Definition</h3>
          <Skill color="blue" percentage={50} title="Html" />
          <Skill color="blue" percentage={50} title="Html" />
          <Skill color="blue" percentage={50} title="Html" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
