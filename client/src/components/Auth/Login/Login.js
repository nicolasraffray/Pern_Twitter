import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form className="d-flex mt-5">
        <input type="text" value=""></input>
        <Link to="/">
          <button>Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
