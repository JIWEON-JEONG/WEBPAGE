import React, { useRef } from "react";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";
const EditorCard = ({ card, onDelete, time }) => {
  const nameRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const { id, name, title, email, context, theme, fileName, fileURL } = card;
  const handleDelete = (event) => {
    event.preventDefault();
    onDelete(event.target.form.email.value);
  };
  return (
    <form>
      <input type="text" value={time} />
      <input ref={nameRef} type="text" name="name" value={name} />
      <select ref={themeRef} name="theme" value={theme}>
        <option value="자유게시판">자유게시판</option>
        <option value="알쓸신잡">알쓸신잡</option>
        <option value="요리정보">요리정보</option>
      </select>
      <input ref={titleRef} type="text" name="title" value={title} />
      <input type="text" name="email" value={email} />
      <textarea ref={messageRef} name="message" value={context} />
      <div>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={handleDelete} />
    </form>
  );
};

export default EditorCard;
