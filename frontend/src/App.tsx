import { renderRoute, routesConfig } from "@pages/routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/Messenger">
      <Switch>{renderRoute(routesConfig)}</Switch>
    </Router>
  );
};

export default App;
