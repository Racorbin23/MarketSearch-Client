import React, { useContext, useState } from "react";
import AuctionContext from "../../Helper/AuctionsContext";
import Query from "../../Helper/Query/Query";
import "./LandingPage.css";

import SearchIcon from "../../images/search-icon.svg";

function LandingPage() {
  const [target, setTarget] = useState("");
  return (
    <div className="landing-wrapper">
      <Navbar target={target} setTarget={setTarget} />
      <Query target={target} />
    </div>
  );
}

function Navbar({ target, setTarget }) {
  const auctions = useContext(AuctionContext);

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

function MostExpensiveCards() {
  return <div>MostExpensiveCards</div>;
}

export default LandingPage;
