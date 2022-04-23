import React, { useContext } from "react";
import AuctionsContext from "../AuctionsContext";
import { CardImage, CardPrice } from "../Card/Card";
import { GetTotalPrice } from "../../Helper/Functions/GetPrice";

import "./Showcase.css";

function ShowcaseByID({ card_ids }) {
  return (
    <div className="showcase-wrapper">
      {card_ids.map((id) => (
        <CardShowcaseItemById id={id} key={id} />
      ))}
    </div>
  );
}

function ShowcaseByPageName({ page_name }) {
  const players = useContext(AuctionsContext);
  if (players.length === 0) {
    return <></>;
  }
  const cards = players.filter((card) => card.page_name === page_name);
  const { total_price_ps, total_price_xbox } = GetTotalPrice(cards);
  return (
    <div className="showcase-wrapper">
      <div className="showcase-title">{page_name}</div>
      <div className="showcase-totals-wrapper">
        <div className="showcase-total">
          PS Total: {total_price_ps.toLocaleString("en")}
        </div>
        <div className="showcase-total">
          Xbox Total: {total_price_xbox.toLocaleString("en")}
        </div>
      </div>
      <div className="showcase-items">
        {cards.map((card) => (
          <CardShowcaseItemByCard card={card} key={card._id} />
        ))}
      </div>
    </div>
  );
}

function CardShowcaseItemByCard({ card }) {
  return (
    <div className="card-showcase-wrapper">
      <CardImage card={card} />
      <div className="card-showcase-info">
        <div>
          <div>{card.player_name}</div>
          <div>{card.page_name}</div>
        </div>
        <div>
          <CardPrice auctions={card.ps_auctions} system="PS" />
          <CardPrice auctions={card.xbox_auctions} system="XBOX" />
        </div>
      </div>
    </div>
  );
}

function CardShowcaseItemById({ id }) {
  const cards = useContext(AuctionsContext);
  const card = cards.find((card) => card._id === id);
  return <CardShowcaseItemByCard card={card} />;
}

export { ShowcaseByID, ShowcaseByPageName };
