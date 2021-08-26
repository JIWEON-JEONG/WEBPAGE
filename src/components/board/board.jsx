import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Button from "../button/button";
import BoardView from "../board_view/boardView";

const Board = ({ authService }) => {
  const [card, setCard] = useState([]);
  const [time, setTime] = useState();
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
  const onAdd = (cards, time) => {
    const updated = [...card, cards];
    setCard(updated);
    setTime(time);
  };

  const onDelete = (value) => {
    const update = card.filter((item) => item.email != value);
    setCard(update);
  };
  const onNewBoard = () => {
    history.push("/main/board/new");
  };
  return (
    <section>
      <Header onLogout={onLogout}></Header>
      <BoardView card={card} time={time}></BoardView>
      <Button name="make" onClick={onNewBoard}></Button>
      <Footer></Footer>
    </section>
  );
};

export default Board;
