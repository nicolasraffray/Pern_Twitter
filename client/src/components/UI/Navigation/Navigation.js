import React, { useState, useEffect } from "react";
import classes from "./Navigation.module.css";
import SignOut from "./../../Auth/SignOut/SignOut";
import Auth from "./../../../context/auth";

import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <NavLink to="/tweets">Twitter</NavLink>
      <NavLink to="/login">Login</NavLink>
      {props.auth ? <SignOut /> : <NavLink to="/signup">Sign Up</NavLink>}
    </div>
  );
};

export default Navigation;
