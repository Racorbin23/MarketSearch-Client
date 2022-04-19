import React, { useState } from "react";

import { Edit, DeleteCard, DeleteImage } from "../../API/Post";
import { CardPrice, CardImage } from "./Card";
import MigrateDropdown from "./MigratableDropdown";

function EditableCard({ card, setEdit }) {
  const [migrating, setMigrate] = useState(false);
  const [playerName, setName] = useState(card.player_name);
  const [collectionName, setCollection] = useState(card.collection_name);
  const [pageName, setPage] = useState(card.page_name);
  const [tabName, setTab] = useState(card.tab_name);

  return (
    <div className="card-opened-wrapper">
      <div className="card-opened-top">
        <CardImage card={card} />
        <div className="card-opened-info">
          <div className="card-opened-info-wrapper">
            <div className="card-opened-info">
              <div className="card-opened-info-playername">
                <input
                  value={playerName}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="card-opened-info-collectionname">
                {card.collection_name}
                <input
                  value={collectionName}
                  onChange={(e) => {
                    setCollection(e.target.value);
                  }}
                />
              </div>
              <div className="card-opened-info-tabname">
                <input
                  value={tabName}
                  onChange={(e) => {
                    setTab(e.target.value);
                  }}
                />
              </div>
              <div className="card-opened-info-tabname">
                <input
                  value={pageName}
                  onChange={(e) => {
                    setPage(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="card-opened-prices">
            <CardPrice auctions={card.ps_auctions} system={"PSN"} />
            <CardPrice auctions={card.xbox_auctions} system={"XBOX"} />
          </div>
        </div>
        <div
          onClick={() => {
            console.log("Saving data!");
            // Save data
            Edit(card._id, playerName, collectionName, pageName, tabName);
            setEdit(false);
            window.location.reload();
          }}
        >
          Save
        </div>
        <div
          onClick={() => {
            console.log("Not saving!");
            setEdit(false);
          }}
        >
          Cancel
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            console.log("Deleting card image!");
            DeleteImage(card._id);
            setEdit(false);
            window.location.reload();
          }}
        >
          Delete Image
        </div>
        <div
          onClick={() => {
            console.log("Deleting card!");
            DeleteCard(card._id);
            setEdit(false);
            window.location.reload();
          }}
        >
          Delete Card
        </div>
        <div
          onClick={() => {
            setMigrate(true);
          }}
        >
          Migrate
        </div>
        {migrating ? (
          <MigrateDropdown card={card} setMigrate={setMigrate} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default EditableCard;
