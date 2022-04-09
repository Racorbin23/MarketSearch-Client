import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardEditor from "../../Helper/CardEditor/CardEditor";
import Blacklister from "../../Helper/Blacklister/Blacklister";
import "./AdminPage.css";

function AdminPage() {
  // Using state instead of router so we dont open up the option to visit our admin page
  // Might be wrong but lmk
  const [page, setPage] = useState(0);

  var content;

  if (page === 1) {
    content = <Blacklister />;
  } else if (page === 1) {
    content = <CardEditor />;
  }

  return (
    <div className="admin-wrapper">
      <div className="admin-nav">
        <Link to="/" className="admin-nav-link">
          Home
        </Link>
        <div
          className="admin-nav-link"
          onClick={() => {
            setPage(1);
          }}
        >
          BLACKLISTER
        </div>
        <div
          className="admin-nav-link"
          onClick={() => {
            setPage(2);
          }}
        >
          CARD EDITOR
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AdminPage;
