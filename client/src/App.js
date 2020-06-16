import React from "react";
import Login from "./components/Auth/Login/Login";
import Posts from "./components/Posts/Posts";
import Navigation from "./components/UI/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" component={Posts} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
