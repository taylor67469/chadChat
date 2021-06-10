import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Forum from "./pages/forum"
import Signup from "./pages/signup"
import ForumPost from "./pages/forumPost"
import Login from "./pages/Login";
import ChatRoom from "./pages/chatroom";
import Home from "./pages/home"
import API from "./utils/API"
import Navbar from "./pages/navbar"
import Room from "./pages/room"
import Lobby from "./pages/Lobby"
function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [chat, setChat] = useState(loggedIn);
  const userLoggedIn=(user)=>{
    setLoggedIn(user);
  }
    //we need Xavier's code to set the loggedIn variable
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
      <Navbar />
        <Switch>
          <Route exact path={"/"}>
          {loggedIn ? <Home/> :<Redirect to = '/signup'/>}
          </Route>
          <Route exact path={"/signup"}>
          {loggedIn ? <Redirect to = '/home'/>:<Signup/>}
          </Route>
          <Route exact path={"/home"}>
            {loggedIn ? <Home/> :<Redirect to = '/signup'/>}
        </Route>
        <Route exact path={"/forum"}>
          {loggedIn ? <Forum/> :<Redirect to = '/forum'/>}
          </Route>
          <Route exact path={"/forumpost"}>
          {loggedIn ? <ForumPost/> :<Redirect to = '/signup'/>}
          </Route>
          <Route exact path={"/login"}>
          <Login userLoggedIn={userLoggedIn}/>
          </Route>
          <Route exact path="/room" component={ChatRoom} />
          <Route exact path="/room/:roomId" component={Lobby} />
        </Switch>
      </div>
    {/* <div>
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
    </div> */}
    </Router>
  );
}

export default App;
