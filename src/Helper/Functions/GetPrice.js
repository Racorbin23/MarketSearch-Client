function GetLowestPrice(data) {
  let lowest = "None";
  if (Object.keys(data).length) {
    data.forEach((item) => {
      if (lowest === "None") {
        if (GetPrice(item) !== "-1") {
          lowest = GetPrice(item);
        }
      }

      if (parseInt(lowest) >= 100000) {
        if (
          GetPrice(item) !== "-1" &&
          parseInt(GetPrice(item)) > parseInt(lowest)
        ) {
          lowest = GetPrice(item);
        }
      } else {
        if (
          GetPrice(item) !== "-1" &&
          parseInt(GetPrice(item)) < parseInt(lowest)
        ) {
          lowest = GetPrice(item);
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
