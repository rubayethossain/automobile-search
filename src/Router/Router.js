import React from "react";
import { Switch, Route } from "react-router-dom";
import paths from "./paths";

function Router() {
  return (
    <Switch>
      <Route path={paths.HOMEPAGE}>HOMEPAGE</Route>
    </Switch>
  );
}

export default Router;
