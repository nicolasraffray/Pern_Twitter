import React from "react";
import Login from "./components/Auth/Login/Login";
import Posts from "./components/Posts/Posts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <Posts />
    </div>
  );
}

export default App;
