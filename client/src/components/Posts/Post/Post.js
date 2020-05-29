import React from "react";
import classes from "./Post.module.css";
import Modal from "../../UI/Modal/Modal";

const Post = (props) => {
  return (
    <div className={classes.PostContainer}>
      <div className="card-header">Username</div>
      <div className="card-body">{props.post.post}</div>
      <div className="card-footer">
        <button className="btn btn-danger">Delete</button>
        <Modal post={props.post} key={props.post.postid} />
      </div>
    </div>
  );
};

export default Post;
