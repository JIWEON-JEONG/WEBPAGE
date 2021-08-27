import React, { useState } from "react";
import axios from "axios";
import styles from "../signup/signup.module.css";
import Button from "../button/button";
import { useRef } from "react";

const Signup = () => {
  const [file, setFile] = useState();
  const emailRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const phRef = useRef();
  const authRef = useRef();
  const addRef = useRef();
  const kakaoAddRef = useRef();
  const onFile = (e) => {
    const image = e.target.files[0];
    setFile(image);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pw = pwRef.current.value;
    const name = nameRef.current.value;
    const ph = phRef.current.value;
    const auth = authRef.current.value;
    const add = addRef.current.value;
    const kakaoAdd = kakaoAddRef.current.value;
    const image = file;
    console.log(image);
    axios //
      .post("/", {
        id: { email },
        pw: { pw },
        name: { name },
        phonenumber: { ph },
        auth: { auth },
        address: { add },
        openKakaoAddress: { kakaoAdd },
        file: { image },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <section>
      <h1>회원가입</h1>
      <form className={styles.form}>
        <input ref={emailRef} type="email" placeholder="email"></input>
        <input
          ref={pwRef}
          type="password"
          placeholder="password"
          minLength="8"
        ></input>
        <input
          ref={pwRef}
          type="password"
          placeholder="password"
          minLength="8"
        ></input>
        <input ref={nameRef} type="text" placeholder="name"></input>
        <input ref={phRef} type="number" placeholder="phonenumber"></input>
        <input ref={authRef} type="text" placeholder="authentication"></input>
        <input ref={addRef} type="text" placeholder="address"></input>
        <input
          ref={kakaoAddRef}
          type="text"
          placeholder="openKakaoTalkAddress"
        ></input>
        <label>가족관계증명서 첨부</label>
        <input
          type="file"
          alt="가족관계증명서"
          accept=".jpg,.jpeg"
          onChange={onFile}
        ></input>
        <Button name="signon" onClick={onSubmit}></Button>
      </form>
    </section>
  );
};

export default Signup;
