import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import Auth from "./../../../context/auth";
import Notice from "./../Notice/Notice";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username: username, password: password };
      console.log(body);
      const response = await fetch(`http://localhost:5000/user/${username}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let valid = await response.json().then((data) => data);
      console.log(valid);
      if (valid === true) {
        Auth.signIn(() => {
          props.setLoggedIn();
          props.history.push("/tweets");
        });
      } else {
        setNotice(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={classes.Login}>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className={classes.Child}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          className={classes.Child}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn btn-success" onClick={props.updateAuth}>
          Login
        </button>
      </form>
      <Notice show={notice} component={"login"} />
    </div>
  );
};

export default Login;
