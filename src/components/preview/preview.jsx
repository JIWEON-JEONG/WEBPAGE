import React from "react";
import PreviewCard from "../preview_card/previewCard";

const Preview = ({ card, goDetail }) => (
  <section>
    {card.map((card) => (
      <PreviewCard card={card} goDetail={goDetail} />
    ))}
  </section>
);

export default Preview;
