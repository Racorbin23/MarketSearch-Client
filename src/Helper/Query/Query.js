import React, { useContext } from "react";
import AuctionsContext from "../AuctionsContext.js";

import { Card } from "../Card/Card.js";
import { GetAllPageNames } from "../Functions/CardHelper.js";
import { ShowcaseByPageName } from "../Showcase/Showcase.js";

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
    } else {
      // Return showcases if target is too small
      // ["ALTER EGO", "ALTER EGO MASKED"]
      const page_names = GetAllPageNames(data);
      const items = page_names.map((page_name, i) => {
        // TODO - Set limit elsewhere
        if (i < 15) {
          return <ShowcaseByPageName key={i} page_name={page_name} />;
        } else {
          return <d></d>;
        }
      });
      return <div className="query-showcase-wrapper">{items}</div>;
    }
  } else {
    // Return loading if data is not loaded from server yet
    items.push(<div key={99} className="loader"></div>);
  }
  return <div className="query-wrapper">{items}</div>;
};

export default Query;
