import { renderRoute, routesConfig } from "@pages/routes";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>{renderRoute(routesConfig)}</Switch>
    </Router>
  );
};

export default App;
