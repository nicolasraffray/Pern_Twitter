import React, { Fragment, useEffect, useState } from "react";
import Post from "./Post/Post";
import AddPost from "../Posts/AddPost/AddPost";
import classes from "./Post/Post.module.css";
import Modal from "../UI/Modal/Modal";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/post");
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (id) => {
    try {
      console.log(id);
      const deletePost = await fetch(`http://localhost:5000/post/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.postid !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Fragment>
      {" "}
      <AddPost />
      {posts.reverse().map((post) => {
        return (
          <div className={classes.PostContainer} key={post.postid}>
            <div className="card-header">Username</div>
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
