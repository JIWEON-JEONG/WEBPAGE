import React from "react";
import styles from "./createUser.module.css";

const CreateUser = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contextBox}>
        <img className={styles.img} src="img/logo.png"></img>
        <h2>
          "Lighten up on your self, No one is perfect, Gently accep your
          humanness
        </h2>
        <img src="img/picture1.jpg"></img>
        <span>SB</span>
      </div>
      <div className={styles.loginBox}>
        <span>SB</span>
        <form>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="PASSWORD"></input>
          <input type="text" placeholder="PhoneNumber"></input>
          <input type="text" placeholder="Open KAKAOTALK LINK"></input>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
