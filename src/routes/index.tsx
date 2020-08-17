import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Routes";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
