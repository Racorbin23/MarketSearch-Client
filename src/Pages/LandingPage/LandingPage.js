import React, { useContext, useEffect, useState } from "react";
import AuctionsContext from "../../Contexts/AuctionsContext";
import { getLowestBuyout, getLowestBid } from "../../Card";
import "./LandingPage.css";

function LandingPage() {
  const data = useContext(AuctionsContext);
  const [targetName, setTarget] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (targetName.length > 2) {
      const tItems = [];
      data.forEach((item, i) => {
        if (
          item.player_name.toLowerCase().startsWith(targetName.toLowerCase())
        ) {
          var lowestBuyout, lowestBid;
          const lowbid = getLowestBid(item);
          const lowbuyout = getLowestBuyout(item);
          const now = Math.round(Date.now() / 1000);
          const timeDiff_bid = Math.round((now - lowbid.time_posted) / 60);
          const timeDiff_buyout = Math.round(
            (now - lowbuyout.time_posted) / 60
          );

          if (lowbuyout.buyout === "") {
            lowestBuyout = 0;
          } else {
            lowestBuyout = parseInt(lowbuyout.buyout).toLocaleString("en");
          }
          if (lowbid.bid === "") {
            lowestBid = 0;
          } else {
            lowestBid = parseInt(lowbid.bid).toLocaleString("en");
          }

          tItems.push(
            <Option
              id={i}
              key={i}
              item={item}
              lowestBid={lowestBid}
              lowestBuyout={lowestBuyout}
              timeDiff_bid={timeDiff_bid}
              timeDiff_buyout={timeDiff_buyout}
            />
          );
        }
      });
      setItems(tItems);
    } else {
      setItems([]);
    }
  }, [targetName]);

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        placeholder="Search..."
        value={targetName}
        onChange={(e) => {
          setTarget(e.target.value);
        }}
      />
      <div className="result-wrapper">{items}</div>
    </div>
  );
}

function Option({
  id,
  item,
  lowestBid,
  lowestBuyout,
  timeDiff_bid,
  timeDiff_buyout,
}) {
  return (
    <div key={id} className="item-wrapper">
      <img
        className="item-picture"
        src={`http://192.168.1.25:3001/images/${item.player_name}-${item.collection_name}-${item.page_name}-${item.tab_name}.png`}
        alt=""
      />
      <div className="item-contents-wrapper">
        <div className="item-contents-title">{item.player_name}</div>
        <div className="item-contents-title-info">
          {item.collection_name} - {item.page_name}
        </div>
        <div className="item-contents-buyout">Lowest Bid MT: {lowestBid}</div>
        <div className="item-contents-time">
          Found {timeDiff_bid} Minutes ago
        </div>
        <div className="item-contents-buyout">
          Lowest Buyout MT: {lowestBuyout}
        </div>
        <div className="item-contents-time">
          Found {timeDiff_buyout} Minutes ago
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
