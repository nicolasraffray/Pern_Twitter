import React from "react";
import { Link } from "react-router-dom";
import classes from "./PrimaryPage.module.css";

const PrimaryPage = () => {
  return (
    <div className="Primary">
      <Link to="/login">
        <button className="btn btn-outline-success">Login</button>
      </Link>
      <Link to="/signup">
        <button className="btn btn-outline-success">Sign Up</button>
      </Link>
    </div>
  );
};

export default PrimaryPage;
