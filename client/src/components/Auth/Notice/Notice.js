import React from "react";

const Notice = (props) => {
  const loginOrSignUp = () => {
    return props.component === "signup" ? (
      <div>This Username or Email Already Exists</div>
    ) : (
      <div>Invalid Username or Password </div>
    );
  };

  return props.show ? loginOrSignUp() : null;
};

export default Notice;
