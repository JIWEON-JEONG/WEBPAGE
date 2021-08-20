import React from "react";
import styles from "./createUser.module.css";

const CreateUser = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contextBox}>
        <img className={styles.img} src="img/logo.png"></img>
        <div className={styles.center}>
          <h2 className={styles.text}>
            "Lighten up on your self, No one is perfect, Gently accept your
            humanness
          </h2>
          <img className={styles.picture} src="img/picture1.jpg"></img>
        </div>
        <span className={styles.footer}>SB</span>
      </div>
      <div className={styles.loginBox}>
        <span className={styles.footer}>SB</span>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
          ></input>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
          ></input>
          <input
            className={styles.input}
            type="password"
            placeholder="PASSWORD"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="PhoneNumber"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Open KAKAOTALK LINK"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Open KAKAOTALK LINK"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Open KAKAOTALK LINK"
          ></input>
          <button className={styles.button}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
