import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const AddForm = ({ onAdd }) => {
  const history = useHistory();
  const idRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const contextRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const cards = {
      id: "id",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      context: contextRef.current.value || "",
      time: time,
    };
    formRef.current.reset();
    onAdd(cards);
    history.push("/main/board");
  };
  return (
    <form ref={formRef}>
      <input ref={titleRef} type="text" placeholder="Title"></input>
      <select ref={themeRef} type="text" placeholder="Category">
        <option value="자유게시판">자유게시판</option>
        <option value="알쓸신잡">알쓸신잡</option>
        <option value="요리정보">요리정보</option>
      </select>
      <textarea ref={contextRef} name="context" placeholder="context" />
      <div>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit}>
        Add
      </Button>
    </form>
  );
};

export default AddForm;
