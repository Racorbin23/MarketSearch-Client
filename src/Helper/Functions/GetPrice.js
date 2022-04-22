function GetLowestPrice(data) {
  let lowest = "None";
  if (Object.keys(data).length) {
    data.forEach((item) => {
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
          (item_price_int > lowest_int || item_price_int < item_price)
        ) {
          lowest = item_price;
        }
      }
    });
  }

  return lowest;
}

function GetPrice(card_data) {
  if (card_data.buyout !== "-1") {
    return card_data.buyout;
  } else if (parseInt(card_data.bid) >= 100000) {
    return card_data.bid;
  } else {
    return "-1";
  }
}

export { GetLowestPrice };
