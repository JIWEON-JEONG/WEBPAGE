import Header from "../header/header";
import Footer from "../footer/footer";
import React, { useEffect, useState } from "react";
import Editor from "../editor/editor";

const BoardEditor = ({ card, onAdd, onDelete }) => {
  return (
    <section>
      <Header></Header>
      <Editor card={card} onAdd={onAdd} onDelete={onDelete}></Editor>
      <Footer></Footer>
    </section>
  );
};

export default BoardEditor;
