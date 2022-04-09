import "./Card.css";

function Card({ card }) {
  return (
    <div className="card-wrapper">
      <CardImage card={card} className="player-img" />
      <CardInfo card={card} className="card-info" />
    </div>
  );
}

function CardInfo({ card }) {
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
