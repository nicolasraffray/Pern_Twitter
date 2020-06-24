import React, { Component, Fragment, useState, useEffect } from "react";
import Login from "./components/Auth/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Navigation from "./components/UI/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Auth/SignUp/SignUp";
import PrimaryPage from "./components/Auth/PrimaryPage/PrimaryPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Auth from "./context/auth";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  const [loggedIn, setLoggedIn] = useState(Auth.isAuthenticated());
  const [userId, setUser] = useState("");

  useEffect(() => {
    setLoggedIn(Auth.isAuthenticated());
  }, [Auth.isAuthenticated()]);

  const isAuthenticated = () => {
    return (
      <Fragment>
        {console.log(loggedIn)}
        <BrowserRouter>
          <Navigation auth={loggedIn} />
          <Switch>
            <Route
              path="/login"
              render={(props) => (
                <Login {...props} setLoggedIn={setLoggedIn} setUser={setUser} />
              )}
            />
            <Route
              path="/signup"
              render={(props) => (
                <SignUp
                  {...props}
                  setLoggedIn={setLoggedIn}
                  setUser={setUser}
                />
              )}
            />
            <Route path="/" component={PrimaryPage} exact />
            <PrivateRoute
              exact
              path="/tweets"
              component={(props) => <HomePage {...props} userId={userId} />}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  };

  return isAuthenticated();
};

export default App;

// function App() {
//   const existingTokens = JSON.parse(localStorage.getItem("tokens"));
//   const [authTokens, setAuthTokens] = useState(existingTokens);

//   const setTokens = (data) => {
//     console.log(data);
//     localStorage.setItem("tokens", JSON.stringify(data));
//     setAuthTokens(data);
//   };

//   return (
//     <div className="App">
//       <Navigation />
//       <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
//         <BrowserRouter>
//           <Route exact path="/" component={PrimaryPage} />
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={SignUp} />
//           <PrivateRoute path="/tweets" component={Posts} />
//         </BrowserRouter>
//       </AuthContext.Provider>

//       {/* { authTokens, setAuthTokens: setTokens } */}

//       {/* <Navigation />
//       <Switch>
//         <Route path="/" component={PrimaryPage} exact />
//         <Route path="/tweets" component={Posts} exact />
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={SignUp} />
//         <Route component={Error} />
//       </Switch> */}
//     </div>
//   );
// }

// export default App;
