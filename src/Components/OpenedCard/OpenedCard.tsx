import React, { useState } from "react";
import "./OpenedCard.css";

import { GetLowestPrice } from "../../Helper/Functions/GetPrice";

import { CardImage } from "../Card/Card";
import EditableCard from "../EditableCard/EditableCard";
import { AuctionInterface, CardInterface } from "../../Helper/InterfaceObjects";

function OpenedCard({
  card,
  setOpen,
}: {
  card: CardInterface;
  setOpen: Function;
}) {
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

function CardInfo({ card }: { card: CardInterface }) {
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

function CardPrice({
  auctions,
  system,
}: {
  auctions: AuctionInterface[];
  system: string;
}) {
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

function CardEdit({ setEdit }: { setEdit: Function }) {
  return (
    <div className="card-opened-edit-button" onClick={() => setEdit(true)}>
      <span className="material-symbols-outlined" id="card-opened-button">
        edit_note
      </span>
    </div>
  );
}

function CardClose({ setOpen }: { setOpen: Function }) {
  return (
    <div className="card-opened-close-button" onClick={() => setOpen(false)}>
      <span className="material-symbols-outlined" id="card-opened-button">
        close
      </span>
    </div>
  );
}

export default OpenedCard;
