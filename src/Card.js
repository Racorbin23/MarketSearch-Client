function getLowestBuyout(CardData) {
  if (Object.keys(CardData).length > 0) {
    const auctions = CardData.auctions;
    var lowest = auctions[0];

    auctions.forEach((item, i) => {
      const time_posted = item.time_posted;
      const bid = parseInt(item.bid);
      const buyout = parseInt(item.buyout);

      if (parseInt(lowest.buyout) > buyout || lowest.buyout === "") {
        lowest = item;
      }
    });
    return lowest;
  }
}

function getLowestBid(CardData) {
  if (Object.keys(CardData).length > 0) {
    const auctions = CardData.auctions;
    var lowest = auctions[0];

    auctions.forEach((item, i) => {
      const time_posted = item.time_posted;
      const bid = parseInt(item.bid);
      const buyout = parseInt(item.buyout);

      if (bid > 100000 && bid > parseInt(lowest.bid)) {
        lowest = item;
      } else {
        if (parseInt(lowest.bid) > bid || lowest.bid === "") {
          lowest = item;
        }
      }
    });
    return lowest;
  }
}

export { getLowestBuyout, getLowestBid };
