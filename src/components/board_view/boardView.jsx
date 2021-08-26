import React, { useEffect, useState } from "react";
import Preview from "../preview/preview";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
const BoardView = ({ card, goDetail }) => {
  return (
    <section>
      <Header></Header>
      <Preview card={card} goDetail={goDetail}></Preview>
    </section>
  );
};

export default BoardView;
