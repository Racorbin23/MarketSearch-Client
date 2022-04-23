import React, { useState } from "react";
import "./LandingPage.css";

import SearchIcon from "../../images/search-icon.svg";
import LogoIcon from "../../images/logo.png";
import GithubLogo from "../../images/github-logo.svg";

import Query from "../../Components/Query/Query";

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
      <img
        className="nav-logo-img"
        src={LogoIcon}
        alt="Logo"
        onClick={() => {
          window.location.reload();
        }}
      />
      <SearchField target={target} setTarget={setTarget} />
      <img
        title="Come see how the project works!"
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
      {target.length > 0 ? (
        <span
          class="material-symbols-outlined"
          onClick={() => {
            setTarget("");
          }}
        >
          close
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LandingPage;
