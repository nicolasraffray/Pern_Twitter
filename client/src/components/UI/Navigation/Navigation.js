import React from "react";
import classes from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.Navigation}>
      <NavLink to="/tweets">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  );
};

export default Navigation;
