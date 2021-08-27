import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router-dom";

import Button from "../button/button";

const Main = () => {
  const history = useHistory();

  const goBoard = () => {
    history.push("/main/board");
  };
  return (
    <section>
      <Header></Header>
      <Button name="Board" onClick={goBoard}></Button>
      <Footer></Footer>
    </section>
  );
};

export default Main;
