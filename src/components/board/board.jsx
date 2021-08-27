import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button/button";
import BoardView from "../board_view/boardView";

const Board = ({ card }) => {
  const history = useHistory();

  const onNewBoard = () => {
    history.push("/main/board/new");
  };
  return (
    <section>
      <Header></Header>
      <BoardView card={card}></BoardView>
      <Button name="Write a Post" onClick={onNewBoard}></Button>
      <Footer></Footer>
    </section>
  );
};

export default Board;
