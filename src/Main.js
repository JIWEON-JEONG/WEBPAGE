import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Main = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <img className={styles.img} src="img/logo.png"></img>
        <form className={styles.forms}>
          <button className={styles.button}>Store</button>
          <button className={styles.button}>Board</button>
          <button className={styles.button}>Hospital</button>
          <button className={styles.button}>
            <FontAwesomeIcon icon={faUser} />
            Login
          </button>
          <button className={styles.button}>Help</button>
          <button className={styles.button}>회원가입</button>
        </form>
      </div>
      <div className={styles.centerBox}>
        <div className={styles.loginBox}>
          <div>
            <img className={styles.img} src="img/logo.png"></img>
          </div>
          <input type="text" placeholder="EMAIL..."></input>
          <input type="password" placeholder="PASSWORD..."></input>
        </div>
        <div className={styles.center}>
          <h2>Never,never,never give up</h2>
          <img className={styles.mainImg} src="img/mainimg.jpg"></img>
          <div>
            <button>Learn more</button>
          </div>
        </div>
        <div className={styles.footerBox}>
          <span>SB</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
