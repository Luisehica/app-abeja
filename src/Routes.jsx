import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./modules/app-abeja/pages/Home";
import TopTenPage from "./modules/app-abeja/pages/TopTenPage";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/topTen/:attribute" component={TopTenPage}/>
      <Redirect from="/**" exact to="/home" />
    </Switch>
  );
};

export default Routes;
