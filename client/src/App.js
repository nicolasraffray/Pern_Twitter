import React, { Component, Fragment, useState } from "react";
import Login from "./components/Auth/Login/Login";
import Posts from "./components/Posts/Posts";
import Navigation from "./components/UI/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";
import PrimaryPage from "./components/Auth/PrimaryPage/PrimaryPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthContext } from "./context/auth";

// class App extends Component {
//   state = {
//     auth: false,
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     console.log(prevState, this.state.auth);
//     console.log("Updateing is runnign");
//     if (prevState.auth !== this.state.auth) {
//       window.location = "/tweets";
//       this.setState({ auth: true });
//     }
//   };

//   updateAuth = () => {
//     this.setState({
//       auth: true,
//     });
//     console.log(this.state.auth);
//   };

//   isAuthenticated = () => {
//     console.log("authenticated runnign");

//     return (
//       <Switch>
//         <Route path="/" component={PrimaryPage} exact />
//         <Route
//           path="/login"
//           component={() => {
//             return <Login updateAuth={this.updateAuth} />;
//           }}
//         />
//         <Route
//           exact
//           path="/tweets"
//           component={() => {
//             return this.state.auth ? <Posts /> : <PrimaryPage />;
//           }}
//         />
//         <Route
//           path="/signup"
//           component={() => {
//             return <SignUp updateAuth={this.updateAuth} />;
//           }}
//         />
//       </Switch>
//     );
//   };

//   render() {
//     return this.isAuthenticated();
//   }
// }

// export default App;

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div className="App">
      <Navigation />
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Route exact path="/" component={PrimaryPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {/* <PrivateRoute path="/tweets" component={Posts} /> */}
      </AuthContext.Provider>

      {/* <Navigation />
      <Switch>
        <Route path="/" component={PrimaryPage} exact />
        <Route path="/tweets" component={Posts} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={Error} />
      </Switch> */}
    </div>
  );
}

export default App;
