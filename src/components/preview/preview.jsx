import React from "react";
import PreviewCard from "../preview_card/previewCard";

const Preview = ({ card, time }) => (
  <section>
    {card.map((card) => (
      <PreviewCard card={card} time={time} />
    ))}
  </section>
);

export default Preview;
