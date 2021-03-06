import React from "react";
import { Route, Redirect } from "react-router-dom";
import SignUpContainer from "./session/sign_up_container";
import SignInContainer from "./session/sign_in_container";
import HomeContainer from "./home/home_container";
import NavBar from "./nav_bar/nav_bar_container";
import { Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import TrailsShowContainer from "./trails/trails_show_container";
import ParksShowContainer from "./parks/parks_show_container"; 
import Footer from "./home/footer";

const App = () => (
<div>
    <header className="nav-bar">
        <NavBar />
    </header>
    <Switch>
        <Route exact path="/trail/:trailId" component={TrailsShowContainer}/>
        <Route exact path="/park/:parkId" component={ParksShowContainer} />
        <AuthRoute exact path="/signup" component={SignUpContainer} />
        <AuthRoute exact path="/signin" component={SignInContainer} />
        <Route exact path="/" component={HomeContainer} />  
        <Redirect to="/"/>
    </Switch>
    <Footer />
</div>
);  

export default App;
