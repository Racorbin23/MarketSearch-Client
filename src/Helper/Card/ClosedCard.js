import React from "react";

import { CardImage, CardInfo } from "./Card";

function ClosedCard({ card, setOpen }) {
  return (
    <div className="card-wrapper" onClick={() => setOpen(true)}>
      <CardImage card={card} className="player-img" />
      <CardInfo card={card} className="card-info" />
    </div>
  );
}

export default ClosedCard;
