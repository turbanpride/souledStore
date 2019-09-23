import React, { Component } from "react";

import { Route, Switch ,BrowserRouter} from "react-router-dom";

import Home from './Home/Home';
import ProductListing from './ProductListing/ProductListing';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ProductListing" component={ProductListing} />
      </Switch>
    );
  }
}

export default AppRouter;
