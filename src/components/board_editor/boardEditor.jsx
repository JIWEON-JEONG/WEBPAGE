import Header from "../header/header";
import Footer from "../footer/footer";
import React, { useEffect, useState } from "react";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useHistory } from "react-router-dom";

const BoardEditor = ({ authService }) => {
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
  return (
    <section>
      <Header onLogout={onLogout}></Header>
      <Editor
        card={card}
        onAdd={onAdd}
        onDelete={onDelete}
        time={time}
      ></Editor>
      <Footer></Footer>
    </section>
  );
};

export default BoardEditor;
