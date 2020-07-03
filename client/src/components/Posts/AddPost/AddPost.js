import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import classes from "./AddPost.module.css";
import Auth from "./../../../context/auth";

const AddPost = (props) => {
  const [post, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(post);
    try {
      const body = { post: post, userId: props.userId };
      const response = await fetch("http://localhost:5000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setDescription("");
      props.setRerender(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className={classes.AddPost}>
        <img
          src="https://cdn.mos.cms.futurecdn.net/5d4c1670c1ededc5c9f499441faf67a5.jpg"
          width="25%"
          height="10%"
        ></img>
        <div className={classes.InnerDiv}>
          <center>
            <form onSubmit={onSubmitForm}>
              <input
                className={"form-control"}
                type="text"
                value={post}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className="btn btn-success"> Tweet </button>
            </form>
          </center>
        </div>
      </div>
    </Fragment>
  );
};

export default AddPost;
