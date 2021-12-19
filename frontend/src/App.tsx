import { renderRoute, routesConfig } from "@pages/routes";
import { Main } from "@ui";
import { BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router basename="/">
      <Main>
        <Switch>{renderRoute(routesConfig)}</Switch>
      </Main>
    </Router>
  );
};

export default App;
