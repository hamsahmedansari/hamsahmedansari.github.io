import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import home from "../../views/home";

const Routing = () => {
  return (
    <Switch>
      <Route path="/about" exact component={home} />
      <Route path="/skill" exact component={home} />
      <Route path="/portfolio" exact component={home} />
      <Route path="/contact" exact component={home} />
      <Route path="/" exact component={home} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routing;
