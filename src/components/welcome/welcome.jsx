import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../button/button";

const Welcome = () => {
  const history = useHistory();
  const onSignup = () => history.push("/signup");
  const goLogin = () => history.push("/login");
  return (
    <section>
      <h1>Welcome</h1>
      <Button name="signup" onClick={onSignup}></Button>
      <Button name="login" onClick={goLogin}></Button>
    </section>
  );
};

export default Welcome;
