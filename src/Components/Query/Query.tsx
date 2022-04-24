import React, { useContext } from "react";
import "./Query.css";

import { CardInterface } from "../../Helper/InterfaceObjects";
import AuctionsContext from "../../Helper/AuctionsContext";

import { Card } from "../Card/Card";
import { GetAllPageNames } from "../../Helper/Functions/CardHelper";
import { ShowcaseByPageName } from "../Showcase/Showcase";

const Query = ({ target }: { target: string }) => {
  const data: any = useContext(AuctionsContext);
  const items = [];

  // Check if data is loaded and
  // if target is large enough to search
  if (Object.keys(data).length !== 0) {
    if (target.length >= 3) {
      data.forEach((item: CardInterface, i: number) => {
        // Loop through all cards and check if names match
        if (item.player_name.toLowerCase().includes(target.toLowerCase())) {
          items.push(<Card key={i} card={item} />);
        }
      });
    } else {
      // Return showcases if target is too small
      // ["ALTER EGO", "ALTER EGO MASKED"]
      const page_names = GetAllPageNames(data);
      const items = page_names.map((page_name: string, i: number) => {
        // TODO - Set limit elsewhere
        if (i < 15) {
          return <ShowcaseByPageName key={i} page_name={page_name} />;
        } else {
          return <div key={i}></div>;
        }
      });
      return <div className="query-showcase-wrapper">{items}</div>;
    }
  } else {
    // Return loading if data is not loaded from server yet
    items.push(<div key={-1} className="loader"></div>);
  }
  return <div className="query-wrapper">{items}</div>;
};

export default Query;
