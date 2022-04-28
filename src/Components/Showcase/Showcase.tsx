import React, { useContext } from "react";
import "./Showcase.css";

import AuctionsContext from "../../Helper/AuctionsContext";
import { GetCard } from "../../Helper/Functions/CardHelper";
import { GetTotalPrice } from "../../Helper/Functions/GetPrice";

import { LargeCard } from "../Card/Card";
import { CardInterface } from "../../Helper/InterfaceObjects";

function ShowcaseByID({ card_ids }: { card_ids: string[] }) {
  return (
    <div className="showcase-wrapper">
      {card_ids.map((id: string, i: number) => (
        <CardShowcaseItemById id={id} key={i} />
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
        {cards.map((card: CardInterface) => GetCard(card))}
      </div>
    </div>
  );
}

function CardShowcaseItemById({ id }: { id: string }) {
  const cards: any = useContext(AuctionsContext);
  const card = cards.find((card: CardInterface) => card._id === id);
  return <LargeCard card={card} />;
}

export { ShowcaseByID, ShowcaseByPageName };
