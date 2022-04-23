import React, { useState } from "react";

import { GetLowestPrice } from "../Functions/GetPrice";
import EditableCard from "../EditableCard/EditableCard";
import { CardImage } from "../Card/Card";

import CloseIcon from "../../images/close-icon.svg";
import "./OpenedCard.css";

function OpenedCard({ card, setOpen }) {
  const [editable, setEdit] = useState(false);

  if (editable) {
    return <EditableCard card={card} setEdit={setEdit} />;
  } else {
    return (
      <div className="card-opened-wrapper">
        <div className="card-opened-top">
          <CardImage card={card} />
          <div>
            <CardInfo card={card} />
            <div className="card-opened-prices-wrapper">
              <CardPrice auctions={card.ps_auctions} system={"PSN"} />
              <CardPrice auctions={card.xbox_auctions} system={"XBOX"} />
            </div>
          </div>
        </div>

        <div className="card-opened-bottom">
          {process.env.NODE_ENV === "development" ? (
            <CardEdit setEdit={setEdit} />
          ) : (
            <div></div>
          )}
          <CardClose setOpen={setOpen} />
        </div>
      </div>
    );
  }
}

function CardInfo({ card }) {
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
}

function CardPrice({ auctions, system }) {
  var price = GetLowestPrice(auctions);

  if (parseInt(price)) {
    price = parseInt(price).toLocaleString("en");
  }
  return (
    <div className="card-opened-prices">
      <div>{system}:</div>
      <div>{price}</div>
    </div>
  );
}

function CardEdit({ setEdit }) {
  return (
    <div className="card-opened-edit-button" onClick={() => setEdit(true)}>
      <span className="material-symbols-outlined" id="card-opened-edit-button">
        edit_note
      </span>
    </div>
  );
}

function CardClose({ setOpen }) {
  return (
    <img
      className="card-opened-close-button"
      src={CloseIcon}
      alt={"Close"}
      onClick={() => setOpen(false)}
    />
  );
}

export default OpenedCard;