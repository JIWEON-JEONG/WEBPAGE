import React from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import BoardDetail from "../boardDetail.jsx/boardDetail";
import Button from "../button/button";

const PreviewCard = ({ card, goDetail }) => {
  const history = useHistory();
  const idRef = useRef();
  const { id, time, title } = card;
  const onDetail = () => {
    const value = card.id;
    goDetail(value);
  };

  return (
    <div>
      <h1 ref={idRef}>{id}</h1>
      <span>{time}</span>
      <Button name={title} onClick={onDetail}></Button>
    </div>
  );
};

export default PreviewCard;
