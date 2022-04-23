import React, { useContext, useState } from "react";
import "./Showcase.css";

import AuctionsContext from "../../Helper/AuctionsContext";
import { GetTotalPrice } from "../../Helper/Functions/GetPrice";

import OpenedCard from "../OpenedCard/OpenedCard";
import { CardImage, CardPrice } from "../Card/Card";
import { CardInterface } from "../../Helper/InterfaceObjects";

function ShowcaseByID({ card_ids }: { card_ids: number[] }) {
  return (
    <div className="showcase-wrapper">
      {card_ids.map((id: number) => (
        <CardShowcaseItemById id={id} key={id} />
      ))}
    </div>
  );
}

function ShowcaseByPageName({ page_name }: { page_name: string }) {
  const players: any = useContext(AuctionsContext);
  if (players.length === 0) {
    return <></>;
  }
  const cards = players.filter(
    (card: CardInterface) => card.page_name === page_name
  );
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
        {cards.map((card: CardInterface) => (
          <CardShowcaseItemByCard card={card} key={card._id} />
        ))}
      </div>
    </div>
  );
}

function CardShowcaseItemByCard({ card }: { card: CardInterface }) {
  const [open, setOpen] = useState(false);

  if (open) {
    return <OpenedCard card={card} setOpen={setOpen} />;
  } else {
    return (
      <div
        className="card-showcase-wrapper"
        onClick={() => {
          setOpen(true);
        }}
      >
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
}

function CardShowcaseItemById({ id }: { id: number }) {
  const cards: any = useContext(AuctionsContext);
  const card = cards.find((card: CardInterface) => card._id === id);
  return <CardShowcaseItemByCard card={card} />;
}

export { ShowcaseByID, ShowcaseByPageName };
