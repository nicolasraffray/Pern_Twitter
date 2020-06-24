import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import classes from "./SignUp.module.css";
import Auth from "./../../../context/auth";
import Notice from "./../../Auth/Notice/Notice";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState(false);

  const onSubmitForm = async (e) => {
    console.log("in the submit form");
    e.preventDefault();
    try {
      const body = { username: username, email: email, password: password };
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      let valid = await response.json().then((data) => data);
      console.log(valid);
      if (valid !== "Failed") {
        Auth.signIn(() => {
          props.setUser(valid[0].userid);
          props.setLoggedIn();
          props.history.push("/tweets");
        });
      } else {
        setNotice(true);
      }
      // window.location = "/tweets";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={classes.SignUp}>
      <form onSubmit={onSubmitForm}>
        <input
          className={classes.Child}
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className={classes.Child}
          type="text"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className={classes.Child}
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn btn-success">Sign Up!</button>
      </form>
      <Notice show={notice} component={"signup"} />
    </div>
  );
};

export default SignUp;
