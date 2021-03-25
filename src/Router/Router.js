import { AddCar, CarDetails, Search } from "containers";
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import paths from "./paths";

function Router() {
  return (
    <Fragment>
      <Switch>
        <Route exact path={`${paths.CAR_DETAILS}:car_id/`}>
          <CarDetails />
        </Route>
        <Route exact path={[paths.ADD_CAR, `${paths.EDIT_CAR}:car_id/`]}>
          <AddCar />
        </Route>
        <Route exact path={paths.SEARCH}>
          <Search />
        </Route>
        <Route path={"*"}>
          <h3>Sorry Page Not Found</h3>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default Router;
