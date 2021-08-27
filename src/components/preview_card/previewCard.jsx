import React from "react";

const PreviewCard = ({ card }) => {
  const { id, time, title } = card;

  return (
    <ul>
      <h1>{id}</h1>
      <span>{time}</span>
      <p>{title}</p>
    </ul>
  );
};

export default PreviewCard;
