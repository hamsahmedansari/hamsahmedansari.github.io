import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import home from "../views/home";

const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={home} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routing;
