import React, { useEffect, useState, Fragment } from "react";
import Auth from "./../../../context/auth";

import { NavLink } from "react-router-dom";

const SignOut = (props) => {
  const handleClick = () => {
    Auth.signOut(() => {
      window.location = "/";
    });
  };

  return (
    <NavLink to="/" onClick={handleClick}>
      Sign Out
    </NavLink>
  );
};

export default SignOut;
