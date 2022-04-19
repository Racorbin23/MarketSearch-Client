import React, { useContext, useState } from "react";
import AuctionContext from "../../Helper/AuctionsContext";
import Query from "../../Helper/Query/Query";

import { GetLowestPrice } from "../../Helper/Card/Card";
import SearchIcon from "../../images/search-icon.svg";
import "./LandingPage.css";

function LandingPage() {
  const [target, setTarget] = useState("");
  return (
    <div className="landing-wrapper">
      <Navbar target={target} setTarget={setTarget} />
      {target.length > 3 ? (
        <Query target={target} />
      ) : (
        <MostExpensiveCardShowcase />
      )}
    </div>
  );
}

function Navbar({ target, setTarget }) {
  return (
    <div className="landing-nav">
      <div className="nav-search-bar">
        <img className="nav-img" src={SearchIcon} alt="Search Icon" />
        <input
          className="nav-input"
          placeholder="Search..."
          value={target}
          onChange={(e) => {
            setTarget(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

function findMostExpensiveCards(list) {
  const cards = [];
  const minimum = 50000;

  if (list.length > 0) {
    list.forEach((card) => {
      if (
        GetLowestPrice(card.ps_auctions).buyout > minimum ||
        GetLowestPrice(card.xbox_auctions).buyout > minimum
      ) {
        cards.push(card);
      }
    });
  }

  return cards;
}

function MostExpensiveCardShowcase() {
  const auctions = findMostExpensiveCards(useContext(AuctionContext));
  return <div></div>;
}

export default LandingPage;
