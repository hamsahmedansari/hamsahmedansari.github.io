import React from "react";
import Banner from "../../components/banner";
import ProtfolioComoponent from "../../components/portfolio";
const Portfolio = props => {
  return (
    <React.Fragment>
      <Banner
        pages={[{ name: "Portfolio", link: "/portfolio" }]}
        title="Portfolio"
      />
      <ProtfolioComoponent topSpacing={true} />
    </React.Fragment>
  );
};

export default Portfolio;
