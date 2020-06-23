import React from "react";

const Notice = (props) => {
  return props.show ? <div>Invalid Username or Password </div> : null;
};

export default Notice;
