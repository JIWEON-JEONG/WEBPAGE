import React, { useEffect, useState } from "react";
import Preview from "../preview/preview";
import { useHistory } from "react-router-dom";
import Header from "../header/header";

const BoardView = ({ card }) => {
  return (
    <section>
      <Header></Header>
      <Preview card={card}></Preview>
    </section>
  );
};

export default BoardView;
