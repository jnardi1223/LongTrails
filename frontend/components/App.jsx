import React from "react";
import { Route } from "react-router-dom";
import SignUpContainer from "./session/sign_up_container";
import SignInContainer from "./session/sign_in_container";
import NavBar from "./nav_bar/nav_bar";
import { Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

const App = () => (
<nav className="nav-bar">
   <Switch>
       <AuthRoute exact path="/signup" component={SignUpContainer} />
       <AuthRoute exact path="/signin" component={SignInContainer} />
       <Route path="/" component={NavBar} />
   </Switch>
</nav>
);  

export default App;
