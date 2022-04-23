import { AuctionInterface, CardInterface } from "../InterfaceObjects";

function GetTotalPrice(cards: CardInterface[]) {
  // Go through every card and get the lowest price
  let total_price_ps = 0;
  let total_price_xbox = 0;
  cards.forEach((card: CardInterface) => {
    const lowest_ps = GetLowestPrice(card.ps_auctions);
    const lowest_xbox = GetLowestPrice(card.xbox_auctions);
    if (parseInt(lowest_ps)) {
      total_price_ps += parseInt(lowest_ps);
    }

    if (parseInt(lowest_xbox)) {
      total_price_xbox += parseInt(lowest_xbox);
    }
  });
  return { total_price_ps, total_price_xbox };
}

function GetLowestPrice(data: AuctionInterface[]) {
  let lowest = "None";
  if (Object.keys(data).length) {
    data.forEach((item: AuctionInterface) => {
      const item_price = GetPrice(item);
      const item_price_int = parseInt(item_price);
      const lowest_int = parseInt(lowest);
      if (lowest === "None") {
        if (item_price !== "-1") {
          lowest = item_price;
        }
      }

      if (lowest_int >= 100000) {
        if (
          item_price !== "-1" &&
          (item_price_int > lowest_int || item_price_int < parseInt(item_price))
        ) {
          lowest = item_price;
        }
      }
    });
  }

  return lowest;
}

function GetPrice(auction_data: AuctionInterface) {
  if (auction_data.buyout !== "-1") {
    return auction_data.buyout;
  } else if (parseInt(auction_data.bid) >= 100000) {
    return auction_data.bid;
  } else {
    return "-1";
  }
}

export { GetLowestPrice, GetTotalPrice };
