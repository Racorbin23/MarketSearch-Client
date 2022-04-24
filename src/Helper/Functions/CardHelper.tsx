import React from "react";

import { CardInterface } from "../InterfaceObjects";
import { Card, LargeCard } from "../../Components/Card/Card";

function GetAllPageNames(cards: CardInterface[]) {
  const page_names: string[] = [];
  cards.forEach((card: CardInterface, i: number) => {
    if (!page_names.includes(card.page_name) && card.tab_name === "PREMIUM") {
      page_names.push(card.page_name);
    }
  });
  return page_names;
}

function GetCard(card: CardInterface) {
  var isMobile = window.matchMedia("(max-width: 900px)").matches;

  if (isMobile) {
    return <Card card={card} key={card._id} />;
  } else {
    return <LargeCard card={card} key={card._id} />;
  }
}

export { GetAllPageNames, GetCard };
