import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./route/Home";
import Details from "./route/Details";

function App() {
  return (
    <Router basename="/react_todos">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
