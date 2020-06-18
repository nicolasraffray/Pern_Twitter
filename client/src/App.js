import React, { Component } from "react";
import Login from "./components/Auth/Login/Login";
import Posts from "./components/Posts/Posts";
import Navigation from "./components/UI/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";
import PrimaryPage from "./components/Auth/PrimaryPage/PrimaryPage";

class App extends Component {
  state = {
    auth: false,
  };

  updateAuth = () => {
    this.setState({
      auth: true,
    });
  };

  isAuthenticated = () => {
    if (this.state.auth == true) {
      return <Posts />;
    } else {
      return (
        <Switch>
          <Route path="/" component={PrimaryPage} exact />
          <Route
            path="/login"
            component={() => {
              return <Login updateAuth={this.updateAuth} />;
            }}
          />
          <Route
            path="/signup"
            component={() => {
              return <SignUp updateAuth={this.updateAuth} />;
            }}
          />
          <Route component={Error} />
        </Switch>
      );
    }
  };

  render() {
    return this.isAuthenticated();
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Navigation />
//       <Switch>
//         <Route path="/" component={PrimaryPage} exact />
//         <Route path="/tweets" component={Posts} exact />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//         <Route component={Error} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
