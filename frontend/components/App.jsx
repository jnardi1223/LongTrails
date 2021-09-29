import React from "react";
import { Route } from "react-router-dom";
import SignUpContainer from "./session/sign_up_container";
import SignInContainer from "./session/sign_in_container";
import HomeContainer from "./home/home_container";
import NavBar from "./nav_bar/nav_bar_container";
import { Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

const App = () => (
<div>
    <header className="nav-bar">
        <NavBar />
    </header>
    {/* <Switch> */}
        <Route exact path="/" component={HomeContainer} />  
        <AuthRoute exact path="/signup" component={SignUpContainer} />
        <AuthRoute exact path="/signin" component={SignInContainer} />
    {/* </Switch */}
</div>
);  

export default App;
