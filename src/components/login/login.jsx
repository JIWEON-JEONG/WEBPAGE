import React, { useEffect } from "react";
import Button from "../button/button";
import Footer from "../footer/footer";
import Header from "../header/header";
import axios from "axios";
import { useRef } from "react";

const Login = () => {
  const eRef = useRef();
  const pwRef = useRef();

  const onLogin = (event) => {
    event.preventDefault();
    const id = eRef.current.value;
    const pw = pwRef.current.value;
    axios //
      .post("/login", { id: { id }, pw: { pw } })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <section>
      <Header></Header>
      <h1>Login</h1>
      <form>
        <input ref={eRef} type="email" placeholder="email..."></input>
        <input ref={pwRef} type="password" placeholder="password..."></input>
        <Button name="login" onClick={onLogin}></Button>
      </form>
      <Footer></Footer>
    </section>
  );
};

export default Login;
