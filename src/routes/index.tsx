import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Routes";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";
import ForgotPassowrd from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/Dashboard";
import NewProduct from "../pages/NewProduct";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassowrd} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/detail" component={Detail} isPrivate />
    <Route path="/new-product" component={NewProduct} isPrivate />
  </Switch>
);

export default Routes;
