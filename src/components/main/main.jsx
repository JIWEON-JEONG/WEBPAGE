import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";

import Button from "../button/button";

const Main = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const goBoard = () => {
    history.push("/main/board");
  };
  return (
    <section>
      <Header onLogout={onLogout}></Header>
      <Button name="Board" onClick={goBoard}></Button>
      <Footer></Footer>
    </section>
  );
};

export default Main;
