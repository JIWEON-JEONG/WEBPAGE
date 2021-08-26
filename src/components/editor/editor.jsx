import React from "react";
import AddForm from "../addForm/addForm";
import EditorCard from "../editor_card/editorCard";

const Editor = ({ card, onAdd, onDelete }) => {
  return (
    <section>
      {card.map((card) => (
        <EditorCard key={card.id} card={card} onDelete={onDelete} />
      ))}
      <AddForm onAdd={onAdd}></AddForm>
    </section>
  );
};

export default Editor;
