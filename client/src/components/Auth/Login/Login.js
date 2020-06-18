import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={classes.Login}>
      <form className="d-flex mt-5">
        <input
          type="text"
          className={classes.Child}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          className={classes.Child}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link to="/tweets">
          <button className="btn btn-success">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
