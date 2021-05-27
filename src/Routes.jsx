import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./modules/app-abeja/pages/Home";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Redirect from="/**" exact to="/home" />
    </Switch>
  );
};

export default Routes;
