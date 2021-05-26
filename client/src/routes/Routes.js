import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import ProductsList from "../Pages/ProductsList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
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
