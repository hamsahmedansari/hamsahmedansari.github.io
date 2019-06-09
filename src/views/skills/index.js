import React from "react";
import Banner from "../../components/banner";
import FloatingBox from "../../components/floatingBox";
import Skill from "../../components/skill";
import skillData from "../../data/skill";

const Skills = props => {
  const colors = [
    "#4d27e7",
    "#5b39e9",
    "#6a4beb",
    "#785ced",
    "#876eef",
    "#9680f1",
    "#a491f3",
    "#b3a3f5",
    "#c1b5f7",
    "#d0c6f9"
  ];
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
        {skillData.map((data, i) => (
          <div key={i} class="section-top-border">
            <h3 class="mb-30 title_color">{data.name}</h3>
            <div className="row">
              {data.collections.map((collection, i) => (
                <Skill
                  color={colors[Math.floor(Math.random() * (9 - 0 + 1)) + 0]}
                  percentage={collection.percentage}
                  title={collection.name}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Skills;
