import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Signup from "./pages/Signup"
import ForumPost from "./pages/forumPost"
import Form from "./component/log";
import Login from "./pages/Login";
import ChatRoom from "./pages/chatroom";
import Home from "./pages/home"
import API from "./utils/API"
function App() {
  const [loggedIn, setLoggedIn] = useState(false);  //we need Xavier's code to set the loggedIn variable
  // useEffect(()=>{
  //   hitRoute();
  // }, [])
  // function hitRoute(){
  //   API.getHomeRoute().then(res=>{
  //     console.log("we are hitting the home route");
  //   })
  // }
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
    <div>
      <Switch>
        <Route exact path={"/"}>
          {loggedIn ? <Redirect to ="/home"/> : <Signup/>}
        </Route>
        <Route exact path={"/home"}>
            {loggedIn ? <Home/> :<Redirect to = '/signup'/>}
        </Route>
        <Route exact path={"/signup"}>
        {loggedIn ? <Redirect to = '/home'/>:<Signup/>}
        </Route>
        <Route exact path={"/forumpost"}>
        {loggedIn ? <ForumPost/> :<Redirect to = '/signup'/>}
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
