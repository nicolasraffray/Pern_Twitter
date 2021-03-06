import React, { Fragment, useEffect, useState } from "react";
import classes from "./Posts.module.css";
import Modal from "../UI/Modal/Modal";
import Alert from "../UI/Alert/Alert";

const Posts = (props) => {
  const [tweets, setPosts] = useState([]);
  const [alert, setAlert] = useState(false);

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

  const deletePost = async (id, userid) => {
    if (props.userId === userid) {
      try {
        const deletePost = await fetch(`http://localhost:5000/post/${id}`, {
          method: "DELETE",
        });
        setPosts(tweets.filter((post) => post.postid !== id));
      } catch (err) {
        console.error(err.message);
      }
    } else {
      setAlert(true);
    }
  };

  const cardFotter = (post, user_id) => {
    if (user_id === props.userId) {
      return (
        <div className="card-footer">
          <button
            className="btn btn-danger m-2"
            onClick={() => deletePost(post.postid, post.userid)}
          >
            Delete
          </button>
          <Modal
            post={post}
            key={post.postid}
            userid={props.userId}
            setRerender={props.setRerender}
          />
        </div>
      );
    }
  };

  useEffect(() => {
    getPosts();
  }, [props.render]);

  return (
    <Fragment>
      <div className={classes.Container}>
        {tweets.reverse().map((post) => {
          return (
            <div className={classes.PostContainer} key={post.postid}>
              <div className="card-header">
                {
                  props.users.filter(
                    (userObj) => userObj.userid === post.userid
                  )[0].username
                }
              </div>
              <div className="card-body">{post.post}</div>
              {cardFotter(post, post.userid)}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Posts;
