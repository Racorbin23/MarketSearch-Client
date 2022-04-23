import React, { useState } from "react";

import { URL } from "../../API/Get";
import EditableCard from "./EditableCard";

import { GetLowestPrice } from "../Functions/GetPrice";

import CloseIcon from "../../images/close-icon.svg";
import "./Card.css";

function Card({ card }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ClosedCard card={card} setOpen={setOpen} />
    </div>
  );
}

function OpenedCard({ card, setOpen }) {
  const [editable, setEdit] = useState(false);
  var editButton = <div></div>;
  if (process.env.NODE_ENV === "development") {
    editButton = <div onClick={() => setEdit(true)}>Edit</div>;
  }

  if (editable) {
    return <EditableCard card={card} setEdit={setEdit} />;
  } else {
    return (
      <div className="card-opened-wrapper">
        <div className="card-opened-top">
          <CardImage card={card} />
          <div className="card-opened-info">
            <CardInfo card={card} opened={true} />

            <div className="card-opened-prices">
              <CardPrice auctions={card.ps_auctions} system={"PSN"} />
              <CardPrice auctions={card.xbox_auctions} system={"XBOX"} />
            </div>
          </div>
          <CardClose setOpen={setOpen} />
        </div>
        {editButton}
        <div>GRAPH HERE</div>
      </div>
    );
  }
}

function CardInfo({ card, opened }) {
  if (opened) {
    return (
      <div className="card-opened-info-wrapper">
        <div className="card-opened-info">
          <div className="card-opened-info-playername">{card.player_name}</div>
          <div className="card-opened-info-collectionname">
            {card.collection_name}
          </div>
          <div className="card-opened-info-tabname">{card.tab_name}</div>
        </div>
      </div>
    );
  } else {
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
}

function ClosedCard({ card, setOpen }) {
  return (
    <div className="card-wrapper" onClick={() => setOpen(true)}>
      <CardImage card={card} className="player-img" />
      <CardPrice auctions={card.xbox_auctions} system="XBOX" />
      <CardPrice auctions={card.ps_auctions} system="PSN" />
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
      onClick={() => {
        console.log(card._id);
      }}
    />
  );
}

function CardClose({ setOpen }) {
  return (
    <img
      className="card-opened-close"
      src={CloseIcon}
      alt={"Close"}
      onClick={() => setOpen(false)}
    />
  );
}

export { Card, CardImage, CardPrice, CardInfo };
