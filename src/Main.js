import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

const Main = (props) => {
  return (
    <div>
      <div className={styles.headerBox}>
        <img className={styles.img} src="img/logo.png"></img>
        <button>Store</button>
        <button>Board</button>
        <button>Hospital</button>
        <button>
          <FontAwesomeIcon icon={faUser} />
          Login
        </button>
        <button>Help</button>
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
        </div>
        <div className={styles.footerBox}>
          <span>SB</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
