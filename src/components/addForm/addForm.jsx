import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const AddForm = ({ onAdd }) => {
  const nameRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const cards = {
      id: Date.now(),
      name: nameRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(cards, time);
  };
  return (
    <form ref={formRef}>
      <input ref={nameRef} type="text" placeholder="Name"></input>
      <select ref={themeRef} type="text" placeholder="Category">
        <option value="자유게시판">자유게시판</option>
        <option value="알쓸신잡">알쓸신잡</option>
        <option value="요리정보">요리정보</option>
      </select>
      <input ref={titleRef} name="Title" placeholder="Title"></input>
      <textarea ref={messageRef} name="Message" placeholder="Message" />
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
