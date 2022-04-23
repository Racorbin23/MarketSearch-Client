import React, { useState } from "react";

import { URL } from "../../API/Get";
import { GetLowestPrice } from "../Functions/GetPrice";
import OpenedCard from "../OpenedCard/OpenedCard";

import "./Card.css";

function Card({ card }) {
  const [open, setOpen] = useState(false);
  if (open) {
    return <OpenedCard card={card} setOpen={setOpen} />;
  } else {
    return <ClosedCard card={card} setOpen={setOpen} />;
  }
}

function ClosedCard({ card, setOpen }) {
  return (
    <div className="card-wrapper" onClick={() => setOpen(true)}>
      <CardImage card={card} className="player-img" />
      <CardPrice auctions={card.ps_auctions} system="PSN" />
      <CardPrice auctions={card.xbox_auctions} system="XBOX" />
    </div>
  );
}

function CardInfo({ card }) {
  return (
    <div className="card-info-wrapper">
      <div className="card-info">
        <div className="card-info-playername">{card.player_name}</div>
        <div className="card-info-collectionname">{card.collection_name}</div>
        <div className="card-info-tabname">{card.tab_name}</div>
      </div>
      <div className="card-info-prices-wrapper">
        <CardPrice
          className="card-info-prices"
          auctions={card.xbox_auctions}
          system={"XBOX"}
        />
        <CardPrice
          className="card-info-prices"
          auctions={card.ps_auctions}
          system={"PSN"}
        />
      </div>
    </div>
  );
}

function CardPrice({ auctions, system }) {
  var price = GetLowestPrice(auctions);

  if (parseInt(price)) {
    price = parseInt(price).toLocaleString("en");
  }
  return (
    <div className="card-info-prices">
      <div>{system}:</div>
      <div>{price}</div>
    </div>
  );
}

function CardImage({ card }) {
  return (
    <img
      className="card-img"
      src={`${URL}${card.player_name}-${card.collection_name}-${card.page_name}-${card.tab_name}.png`}
      alt=""
      onError={(e) => {
        e.target.src = `${URL}unknown-card.png`;
      }}
    />
  );
}

export { Card, CardImage, CardPrice, CardInfo };
