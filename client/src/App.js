import React from "react";
import Login from "./components/Auth/Login/Login";
import Posts from "./components/Posts/Posts";
import AddPost from "./components/Posts/AddPost/AddPost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddPost />
      <Login />
      <Posts />
    </div>
  );
}

export default App;
