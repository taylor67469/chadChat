import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Signup from "./pages/signup"
function App() {
  return (
    <Router>
    <div>
      <h1>Hello world!</h1>
      <Switch>
        <Route exact path={"/"}>
            <Forum ></Forum>
        </Route>
        <Route exact path={"/signup"}>
          <Signup></Signup>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
