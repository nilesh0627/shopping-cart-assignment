import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import Login from "../pages/Login";
import Register from "../pages/Register";
function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/products/:id" component={ProductsList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />c
      </Switch>
    </>
  );
}

export default Routes;
