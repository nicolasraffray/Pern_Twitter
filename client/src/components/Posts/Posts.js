import React, { Fragment, useEffect, useState } from "react";
import Post from "./Post/Post";

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

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Fragment>
      {" "}
      {posts.map((post) => {
        console.log(post);
        return (
          <div>
            <Post post={post} key={post.postid} />
            <br></br>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Posts;
