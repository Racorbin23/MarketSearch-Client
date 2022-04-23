import { CardInterface } from "../InterfaceObjects";

function GetAllPageNames(cards: CardInterface[]) {
  const page_names: string[] = [];
  cards.forEach((card: CardInterface, i: number) => {
    if (!page_names.includes(card.page_name) && card.tab_name === "PREMIUM") {
      page_names.push(card.page_name);
    }
  });
  return page_names;
}

export { GetAllPageNames };
