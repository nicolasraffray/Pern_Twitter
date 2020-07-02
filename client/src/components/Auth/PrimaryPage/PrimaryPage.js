import React from "react";
import { Link } from "react-router-dom";
import classes from "./PrimaryPage.module.css";

const PrimaryPage = () => {
  return (
    <div className={classes.Primary}>
      <div className={classes.Welcome}>
        <h1>Welcome To Twitter!</h1>
      </div>
      <div className={classes.Links}>
        <Link to="/login">
          <button className="btn btn-outline-success m-3">Login</button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-outline-success m-3">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default PrimaryPage;
