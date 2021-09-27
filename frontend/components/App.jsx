import React from "react";
import { Route } from "react-router-dom";
import SignUpContainer from "./session/signup_container";
import Home from "./home/home"

const App = () => (
  <div>
    {/* <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUpContainer} />
    {/* <Route path="/login" component={LoginFormContainer} /> */}
    {/* <SignUpContainer/> */}
    {/* <Home/> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={SignUpContainer} />
    <Route exact path="/signup" component={SignUpContainer} />

  </div>
);  

export default App;
