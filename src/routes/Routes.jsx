import React from "react";

import { Route, Switch } from "react-router-dom";

import { Cart, Products, Home, Product } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rj-ecommerce" exact component={Home} />
      <Route path="/product/:slug" component={Product} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default Routes;
