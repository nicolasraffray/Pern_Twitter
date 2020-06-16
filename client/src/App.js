import React from "react";
import Login from "./components/Auth/Login/Login";
import Posts from "./components/Posts/Posts";
import Navigation from "./components/UI/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";
import PrimaryPage from "./components/Auth/PrimaryPage/PrimaryPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" component={PrimaryPage} exact />
        <Route path="/tweets" component={Posts} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
