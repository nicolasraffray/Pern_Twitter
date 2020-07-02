import React, { useState, useEffect } from "react";
import classes from "./Navigation.module.css";
import SignOut from "./../../Auth/SignOut/SignOut";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <img
        src="https://vignette.wikia.nocookie.net/logopedia/images/9/99/Twitter_2012.svg/revision/latest/scale-to-width-down/340?cb=20180321032720"
        width="30"
        height="30"
      />
      <NavLink to="/tweets">Twitter</NavLink>
      {props.auth ? null : <NavLink to="/login">Login</NavLink>}
      {props.auth ? <SignOut /> : <NavLink to="/signup">Sign Up</NavLink>}
    </div>
  );
};

export default Navigation;
