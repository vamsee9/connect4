import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Username from "./containers/username";

export default function Routes() {
  return (
    <Switch>
      <Route>
        <Username/>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}
