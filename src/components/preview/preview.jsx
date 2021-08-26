import React from "react";
import PreviewCard from "../preview_card/previewCard";

const Preview = ({ card }) => (
  <section>
    {card.map((card) => (
      <PreviewCard card={card} />
    ))}
  </section>
);

export default Preview;
