import React, { useState } from "react";
import "./EditableCard.css";

import { Edit, DeleteCard, DeleteImage } from "../../API/Post";

import { CardPrice, CardImage } from "../Card/Card";
import ImageUploader from "../ImageUploader/ImageUploader";
import MigrateDropdown from "../MigrateDropdown/MigrateDropdown";

// TODO Finish

function EditableCard({ card, setEdit }) {
  const [migrating, setMigrate] = useState(false);
  const [uploadingImg, setUploadImg] = useState(false);

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
      </div>
      <div className="card-opened-edit-buttons">
        <div
          className="card-opened-button"
          onClick={() => {
            console.log("Uploading card image!");
            setUploadImg(true);
          }}
        >
          Upload New Image
        </div>
        <div
          className="card-opened-button"
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
          className="card-opened-button"
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
          className="card-opened-button"
          onClick={() => {
            setMigrate(true);
          }}
        >
          Migrate
        </div>
        <div
          className="card-opened-button"
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
          className="card-opened-button"
          onClick={() => {
            console.log("Not saving!");
            setEdit(false);
          }}
        >
          Cancel
        </div>
        {migrating ? (
          <MigrateDropdown card={card} setMigrate={setMigrate} />
        ) : (
          <div></div>
        )}
        {uploadingImg ? <ImageUploader card={card} /> : <div></div>}
      </div>
    </div>
  );
}

export default EditableCard;
