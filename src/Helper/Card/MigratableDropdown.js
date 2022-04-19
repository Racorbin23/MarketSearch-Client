import React, { useContext, useState } from "react";
import AuctionsContext from "../AuctionsContext";
import { MigrateAuctions } from "../../API/Post";

import { URL } from "../../API/Get";

function MigrateDropdown({ card, setMigrate }) {
  // Show list of cards as buttons and allow user to select one
  // Selected card will be used to migrate the passed cards data to
  // The card card will be deleted
  const players = useContext(AuctionsContext);
  const [target, setTarget] = useState("");
  const cards = [];

  if (target.length > 3) {
    players.forEach((player) => {
      if (player._id !== card._id && player.player_name.startsWith(target)) {
        cards.push(
          <div
            className="migrate-card-wrapper"
            onClick={() => {
              console.log("Migrating!");
              // Migrate data
              MigrateAuctions(card, player);
              setMigrate(false);
            }}
          >
            <img
              className="migrate-card-img"
              src={`${URL}${player.player_name}-${player.collection_name}-${player.page_name}-${player.tab_name}.png`}
              alt="PLAYER"
            />
            <div>{player.player_name}</div>
          </div>
        );
      }
    });
  }

  return (
    <div className="migrate-wrapper">
      <input
        value={target}
        onChange={(e) => {
          setTarget(e.target.value);
        }}
      />
      <div className="migrate-items">{cards}</div>
    </div>
  );
}

export default MigrateDropdown;
