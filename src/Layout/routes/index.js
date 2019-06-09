import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import home from "../../views/home";
import About from "../../views/about";
import Skills from "../../views/skills";

const Routing = () => {
  return (
    <Switch>
      <Route path="/about" exact component={About} />
      <Route path="/skill" exact component={Skills} />
      <Route path="/portfolio" exact component={home} />
      <Route path="/contact" exact component={home} />
      <Route path="/" exact component={home} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routing;
