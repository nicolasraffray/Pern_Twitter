import React, { Fragment, useEffect, useState } from "react";
import Posts from "./../Posts/Posts";
import AddPost from "./../Posts/AddPost/AddPost";

const HomePage = (props) => {
  const [users, setUsers] = useState(null);
  const [rerender, setRerender] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/user");
      const jsonUser = await response.json();
      setUsers(jsonUser);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <AddPost setRerender={setRerender} userId={props.userId} />
      {users && (
        <Posts users={users} setRerender={setRerender} render={rerender} />
      )}
    </Fragment>
  );
};

export default HomePage;
