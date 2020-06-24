import React, { Fragment, useEffect, useState } from "react";
import classes from "./Post/Post.module.css";
import Modal from "../UI/Modal/Modal";

const Posts = (props) => {
  const [tweets, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/post");
      const jsonData = await response.json();
      setPosts(jsonData);
      props.setRerender(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    try {
      const deletePost = await fetch(`http://localhost:5000/post/${id}`, {
        method: "DELETE",
      });
      setPosts(tweets.filter((post) => post.postid !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, [props.render]);

  return (
    <Fragment>
      {console.log(props.users)}
      {tweets.reverse().map((post) => {
        return (
          <div className={classes.PostContainer} key={post.postid}>
            <div className="card-header">{props.users[0].userid}</div>
            <div className="card-body">{post.post}</div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => deletePost(post.postid)}
              >
                Delete
              </button>
              <Modal post={post} key={post.postid} />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Posts;
