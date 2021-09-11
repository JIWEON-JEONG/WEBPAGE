import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import React, { useState } from "react";
import BoardEditor from "./components/board_editor/boardEditor";
import Board from "./components/board/board";
import Welcome from "./components/welcome/welcome";
import Signup from "./components/signup/signup";
import BoardDetail from "./components/boardDetail.jsx/boardDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <Welcome></Welcome>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/main">
            <Main></Main>
          </Route>
          <Route exact path="/board">
            <Board></Board>
          </Route>
          <Route path="/board/new">
            <BoardEditor></BoardEditor>
          </Route>
          <Route path="/board/detail/:detail_id">
            <BoardDetail></BoardDetail>
          </Route>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
