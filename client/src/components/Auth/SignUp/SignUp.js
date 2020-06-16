import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      {/* {/* <input type="text">Username</input> */}
      <form>
        <input type="text" placeholder="Username"></input>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <Link to="/">
          <button>Sign Up!</button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
