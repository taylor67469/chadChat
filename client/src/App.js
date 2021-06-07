import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Signup from "./pages/Signup"
import ForumPost from "./pages/forumPost"
import Form from "./component/log";
import Login from "./pages/Login";
import ChatRoom from "./pages/chatroom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Forum ></Forum>
          </Route>
          <Route exact path={"/signup"}>
            <Signup></Signup>
          </Route>
          <Route exact path={"/forumpost"}>
            <ForumPost></ForumPost>
          </Route>
          <Route path={"/login"}>
            <Login></Login>
          </Route>
          <Route exact path="/:roomId" component={ChatRoom} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
