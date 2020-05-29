import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.PostContainer}>
      <div className="card-header">Username</div>
      <div className="card-body">{props.post.post}</div>
      <div className="card-footer">
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-warning">Edit</button>
      </div>
    </div>
  );
};

export default Post;
