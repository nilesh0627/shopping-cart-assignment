import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductsList from "../pages/ProductsList";
import Login from "../pages/Login";
import Register from "../pages/Register";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
