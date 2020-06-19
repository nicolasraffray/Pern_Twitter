import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SignUp.module.css";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitForm = async (e) => {
    console.log("in the submit form");
    e.preventDefault();
    try {
      console.log("trying the fetch", username, email, password);
      const body = { username: username, email: email, password: password };
      console.log(body);
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      props.updateAuth();
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
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className={classes.Child}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className={classes.Child}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn btn-success">Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
