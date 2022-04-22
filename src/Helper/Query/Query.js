import React, { useContext } from "react";
import AuctionsContext from "../AuctionsContext.js";

import { Card } from "../Card/Card.js";
import "./Query.css";

const Query = ({ target }) => {
  const data = useContext(AuctionsContext);
  const items = [];

  // Check if data is loaded and
  // if target is large enough to search
  if (Object.keys(data).length !== 0) {
    if (target.length >= 3) {
      data.forEach((item, i) => {
        // Loop through all cards and check if names match
        if (item.player_name.toLowerCase().includes(target.toLowerCase())) {
          items.push(<Card key={i} card={item} />);
        }
      });
    }
  } else {
    items.push(<div class="loader"></div>);
  }
  return <div className="query-wrapper">{items}</div>;
};

export default Query;
