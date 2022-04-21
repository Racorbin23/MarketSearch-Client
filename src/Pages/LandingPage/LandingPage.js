import React, { useState } from "react";
import Query from "../../Helper/Query/Query";

import SearchIcon from "../../images/search-icon.svg";
import LogoIcon from "../../images/logo.png";
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
    <div className="landing-nav-wrapper">
      <div className="nav-search-bar">
        <img className="nav-logo-img" src={LogoIcon} alt="Logo" />
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
    </div>
  );
}

export default LandingPage;
