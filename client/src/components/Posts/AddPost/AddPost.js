import React, { Fragment, useState } from "react";
import classes from "./AddPost.module.css";

const InputTodo = () => {
  const [post, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { post };
      const response = await fetch("http://localhost:5000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/tweets";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Welcome to Twitter Cloned !</h1>
      <form className={classes.AddPost} onSubmit={onSubmitForm}>
        <input
          type="text"
          value={post}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success"> Tweet </button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
