import React from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={classes.SignUp}>
      {/* {/* <input type="text">Username</input> */}
      <form>
        <input
          className={classes.Child}
          type="text"
          placeholder="Username"
        ></input>
        <input
          className={classes.Child}
          type="text"
          placeholder="Email"
        ></input>
        <input
          className={classes.Child}
          type="password"
          placeholder="Password"
        ></input>
        <Link to="/">
          <button className="btn btn-success">Sign Up!</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
