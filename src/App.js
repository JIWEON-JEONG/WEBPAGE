import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Main from "./components/main/main";
import React, { useState } from "react";
import BoardEditor from "./components/board_editor/boardEditor";
import BoardView from "./components/board_view/boardView";
import Board from "./components/board/board";
import BoardDetail from "./components/boardDetail.jsx/boardDetail";

function App({ authService }) {
  const history = useHistory();
  const [value, setValue] = useState([]);
  const [card, setCard] = useState([
    {
      id: "1",
      time: "2016.11.10/10:23:32",
      title: "게시물 1",
      theme: "자유게시판",
      image: "정지원",
      context: "내용..",
    },
    {
      id: "2",
      time: "2016.11.10/10:23:32",
      title: "게시물 2",
      theme: "자유게시판",
      image: "정지원",
      context: "내용..",
    },
    {
      id: "3",
      time: "2016.11.10/10:23:32",
      title: "게시물 3",
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

  const goDetail = (value) => {
    const view = card.filter((item) => value == item.id);
    setValue(view);
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
          <Board goDetail={goDetail} card={card}></Board>
        </Route>
        <Route path="/main/board/view">
          <BoardView card={card} authService={authService}></BoardView>
        </Route>
        <Route exact path="/main/board/detail">
          <BoardDetail card={card} value={value}></BoardDetail>
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
