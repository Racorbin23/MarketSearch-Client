import React, { useState } from "react";
import { Link } from "react-router-dom";
import Query from "../../Helper/Query/Query";
import "./SearchingPage.css";

function SearchingPage() {
  const [target, setTarget] = useState("");
  return (
    <div className="search-wrapper">
      <div className="search-input-wrapper">
        <input
          className="search-input"
          placeholder=" Search for a card..."
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <Link className="search-admin-button" to="/admin">
          ADMIN
        </Link>
      </div>
      <div className="search-items">
        <Query target={target} />
      </div>
    </div>
  );
}

export default SearchingPage;
