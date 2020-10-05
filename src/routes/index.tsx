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
import Shop from "../pages/Shop/Home";
import Purchase from "../pages/Shop/Purchase";

import NotFound from "../components/NotFound";
import Itens from "../pages/itens";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassowrd} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/cardapio/:shop" exact component={Shop} isPath />
      <Route path="/cardapio/:shop/order" component={Purchase} isPath />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/itens/:id" component={Itens} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/product/detail" component={Detail} isPrivate />
      <Route path="/product/new/:id" component={NewProduct} isPrivate />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
