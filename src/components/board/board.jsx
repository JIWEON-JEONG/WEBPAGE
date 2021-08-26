import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button/button";
import BoardView from "../board_view/boardView";
import styles from "../board/board.module.css";

const Board = ({ card, goDetail }) => {
  const history = useHistory();

  const onNewBoard = () => {
    history.push("/main/board/new");
  };
  return (
    <section>
      <h1 className={styles.header}>정지원</h1>
      <Header></Header>
      <BoardView card={card} goDetail={goDetail}></BoardView>
      <Button name="Write a Post" onClick={onNewBoard}></Button>
      <Footer></Footer>
    </section>
  );
};

export default Board;
