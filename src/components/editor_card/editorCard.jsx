import React, { useRef } from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";
import styles from "../editor_card/editorcard.module.css";
const EditorCard = ({ card, onDelete }) => {
  const titleRef = useRef();
  const themeRef = useRef();
  const contextRef = useRef();
  const { id, time, title, theme, context } = card;
  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(event.target.form.id.value);
  };
  return (
    <form className={styles.edit}>
      <input type="text" value={id}></input>
      <input type="text" value={time} />
      <input ref={titleRef} type="text" name="title" value={title} />
      <select ref={themeRef} name="theme" value={theme}>
        <option value="자유게시판">자유게시판</option>
        <option value="알쓸신잡">알쓸신잡</option>
        <option value="요리정보">요리정보</option>
      </select>
      <textarea ref={contextRef} name="context" value={context} />
      <div>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={handleDelete} />
    </form>
  );
};

export default EditorCard;
