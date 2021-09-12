import React from "react";
import VehicleForm from "./UI/Vehicle Entry Form/vehicle-entry-form";
import GridVehicles from "./UI/Grid of Vehicles/grid-of-vehicles";
import HomePage from "./UI/Home Page/home-page";
import { Route, Router, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/form">
            <VehicleForm />
          </Route>
          <Route path="/grid">
            <GridVehicles />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
