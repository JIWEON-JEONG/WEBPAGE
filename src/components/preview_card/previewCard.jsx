import React from "react";

const PreviewCard = ({ card, time }) => {
  const DEFAULT_IMG = "./images/logo.png";
  const { id, name, company, message, title, email, filename, fileURL } = card;
  const url = fileURL || DEFAULT_IMG;
  return (
    <li>
      <img src={url} />
      <div>
        <p>{time}</p>
        <h1>{name}</h1>

        <p>{title}</p>
        <p>{message}</p>
      </div>
    </li>
  );
};

export default PreviewCard;
