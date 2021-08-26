import React, { useEffect, useState } from "react";
import Preview from "../preview/preview";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button/button";

const BoardView = ({ authService, card, time }) => {
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
  const onNewBoard = () => {
    history.push("/board/new");
  };

  return (
    <section>
      <Header onLogout={onLogout}></Header>
      <Button name="make a new board" onClick={onNewBoard}></Button>
      <Preview card={card} time={time}></Preview>
      <Footer></Footer>
    </section>
  );
};

export default BoardView;
