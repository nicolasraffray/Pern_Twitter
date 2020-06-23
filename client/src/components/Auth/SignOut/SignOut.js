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
    <Fragment>
      <NavLink to="/" onClick={handleClick}>
        Sign Out
      </NavLink>
    </Fragment>
  );
};

export default SignOut;
