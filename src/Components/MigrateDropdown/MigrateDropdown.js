import React, { useContext, useState } from "react";
import "./MigrateDropdown.css";

import { CardImage, CardPrice, LargeCard } from "../Card/Card";
import AuctionsContext from "../../Helper/AuctionsContext";
import { MigrateAuctions } from "../../API/Post";

function MigrateDropdown({ card, setMigrate }) {
  const players = useContext(AuctionsContext);
  const [target, setTarget] = useState(card.player_name.split(" ")[0]);
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
              window.location.reload();
            }}
          >
            <CardImage card={player} />
            <div className="card-showcase-info">
              <div>
                <div>{player.player_name}</div>
                <div>{player.page_name}</div>
              </div>
              <div>
                <CardPrice auctions={player.ps_auctions} system="PS" />
                <CardPrice auctions={player.xbox_auctions} system="XBOX" />
              </div>
            </div>
          </div>
        );
      }
    });
  }

  return (
    <div className="migrate-wrapper">
      <div className="migrate-top-wrapper">
        <LargeCard card={card} />
        <input
          className="migrate-input"
          value={target}
          onChange={(e) => {
            setTarget(e.target.value);
          }}
        />
        <span
          class="material-symbols-outlined"
          onClick={() => {
            setMigrate(false);
          }}
        >
          close
        </span>
      </div>
      <div className="migrate-items">{cards}</div>
    </div>
  );
}

export default MigrateDropdown;
