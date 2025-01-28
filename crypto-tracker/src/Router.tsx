import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/:coinId">
          <Coin /> 
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
