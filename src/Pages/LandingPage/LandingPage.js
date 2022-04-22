import React, { useState } from "react";
import Query from "../../Helper/Query/Query";

import SearchIcon from "../../images/search-icon.svg";
import LogoIcon from "../../images/logo.png";
import GithubLogo from "../../images/github-logo.svg";
import "./LandingPage.css";

// Landing Page is the page users first see when they visit the site.
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
  return (
    <div className="nav-search-bar">
      <img className="nav-logo-img" src={LogoIcon} alt="Logo" />
      <SearchField target={target} setTarget={setTarget} />
      <img
        className="nav-logo-img"
        src={GithubLogo}
        alt="Github"
        onClick={() =>
          (window.location =
            "https://github.com/Racorbin23/MarketSearch-Client")
        }
      />
    </div>
  );
}

function SearchField({ target, setTarget }) {
  return (
    <div className="nav-input-wrapper">
      <img className="nav-search-img" src={SearchIcon} alt="Search Icon" />
      <input
        className="nav-input"
        placeholder="Search..."
        value={target}
        onChange={(e) => {
          setTarget(e.target.value);
        }}
      />
    </div>
  );
}

export default LandingPage;
