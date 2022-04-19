import React, { useContext } from "react";
import AuctionsContext from "../AuctionsContext";

import { Card } from "../Card/Card";
import "./Query.css";

function Query({ target }) {
  const data = useContext(AuctionsContext);
  const items = [];
  if (Object.keys(data).length !== 0 && target.length >= 3) {
    data.forEach((item, i) => {
      console.log();
      if (item.player_name.toLowerCase().includes(target.toLowerCase())) {
        items.push(<Card key={i} card={item} />);
      }
    });
  }
  return (
    <div className="query-wrapper">
      <div className="query-items">{items}</div>
    </div>
  );
}

export default Query;
