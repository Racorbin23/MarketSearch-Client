import Reace, { useState } from "react";
import "./Card.css";

import CloseIcon from "../../images/close-icon.svg";

function Card({ card }) {
  const [open, setOpen] = useState(false);
  if (open) {
    return <OpenedCard card={card} setOpen={setOpen} />;
  } else {
    return <ClosedCard card={card} setOpen={setOpen} />;
  }
}

function OpenedCard({ card, setOpen }) {
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

      <div>GRAPH HERE</div>
    </div>
  );
}

function ClosedCard({ card, setOpen }) {
  return (
    <div className="card-wrapper" onClick={() => setOpen(true)}>
      <CardImage card={card} className="player-img" />
      <CardInfo card={card} className="card-info" />
    </div>
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

function CardPrice({ auctions, system }) {
  var price = GetLowestPrice(auctions).buyout;

  if (parseInt(price)) {
    price = parseInt(price).toLocaleString("en");
  }
  return (
    <div className="card-info-prices">
      {system}: {price}
    </div>
  );
}

function CardImage({ card }) {
  return (
    <img
      className="card-img"
      src={`http://192.168.1.25:3001/images/${card.player_name}-${card.collection_name}-${card.page_name}-${card.tab_name}.png`}
      alt="PLAYER"
    />
  );
}

function GetLowestPrice(data) {
  let lowest = data[0];
  if (Object.keys(data).length) {
    data.forEach((item) => {
      if (lowest.buyout == "-1") {
        lowest = item;
      }
      if (
        parseInt(item.buyout) < parseInt(lowest.buyout) &&
        item.buyout !== "-1"
      ) {
        lowest = item;
      }
    });
  } else {
    lowest = { buyout: "None!" };
  }
  return lowest;
}

export default Card;
