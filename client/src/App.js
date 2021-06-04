import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Signup from "./pages/signup"
import ForumPost from "./pages/forumPost"
function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={"/"}>
            <Forum ></Forum>
        </Route>
        <Route exact path={"/home"}>
            <Home ></Home>
        </Route>
        <Route exact path={"/signup"}>
          <Signup></Signup>
        </Route>
        <Route exact path={"/forumpost"}>
          <ForumPost></ForumPost>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
