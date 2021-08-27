import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import React, { useState } from "react";
import BoardEditor from "./components/board_editor/boardEditor";
import BoardView from "./components/board_view/boardView";
import Board from "./components/board/board";
import Welcome from "./components/welcome/welcome";
import Signup from "./components/signup/signup";

function App() {
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
          <Welcome></Welcome>
        </Route>
        <Route exact path="/signup">
          <Signup></Signup>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/main">
          <Main></Main>
        </Route>
        <Route exact path="/main/board">
          <Board card={card}></Board>
        </Route>
        <Route path="/main/board/view">
          <BoardView card={card}></BoardView>
        </Route>
        <Route exact path="/main/board/new">
          <BoardEditor
            onDelete={onDelete}
            onAdd={onAdd}
            card={card}
          ></BoardEditor>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
