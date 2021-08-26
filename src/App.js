import "./App.css";
import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main/main";
import Board from "./components/board_editor/boardEditor";
import BoardEditor from "./components/board_editor/boardEditor";
import BoardView from "./components/board_view/boardView";

function App({ authService }) {
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
          <Board authService={authService}></Board>
        </Route>
        <Route path="/main/board/view">
          <BoardView authService={authService}></BoardView>
        </Route>
        <Route exact path="/main/new">
          <BoardEditor authService={authService}></BoardEditor>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
