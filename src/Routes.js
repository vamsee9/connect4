import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Username from "./containers/username";
import GameBox from "./containers/Gamebox";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path = "/username">
        <Username />
      </Route>
      <Route exact path="/Gamebox">
        <GameBox />
      </Route>
    </Switch>
  );
}
