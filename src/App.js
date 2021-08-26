import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import React, { useState } from "react";
import BoardEditor from "./components/board_editor/boardEditor";
import BoardView from "./components/board_view/boardView";
import Board from "./components/board/board";

function App({ authService }) {
  const [card, setCard] = useState([
    {
      id: "1",
      time: "2016.11.10/10:23:32",
      title: "게시물 1",
      theme: "자유게시판",
      image: "정지원",
      context: "내용..",
    },
  ]);
  const onAdd = (cards) => {
    const updated = [...card, cards];
    setCard(updated);
  };

  const onDelete = (value) => {
    const update = card.filter((item) => item.id != value);
    setCard(update);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login authService={authService}></Login>
        </Route>
        <Route exact path="/main">
          <Main authService={authService}></Main>
        </Route>
        <Route exact path="/main/board">
          <Board card={card} authService={authService}></Board>
        </Route>
        <Route path="/main/board/view">
          <BoardView card={card} authService={authService}></BoardView>
        </Route>
        <Route exact path="/main/board/new">
          <BoardEditor
            onDelete={onDelete}
            onAdd={onAdd}
            card={card}
            authService={authService}
          ></BoardEditor>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
