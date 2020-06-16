import React from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.Login}>
      <form className="d-flex mt-5">
        <input type="text" value=""></input>
        <Link to="/tweets">
          <button className="btn btn-success">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
