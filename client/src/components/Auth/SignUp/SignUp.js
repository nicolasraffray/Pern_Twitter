import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={classes.SignUp}>
      <form>
        <input
          className={classes.Child}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className={classes.Child}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className={classes.Child}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link to="/tweets">
          <button className="btn btn-success" onClick={props.updateAuth}>
            Sign Up!
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
