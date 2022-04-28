import React, { useState } from "react";
import "./ImageUploader.css";

import { CardInterface } from "../../Helper/InterfaceObjects";
import { UploadImageLink, UploadImageFile } from "../../API/Post";

function ImageUploader({ card }: { card: CardInterface }) {
  const [link, setLink] = useState("");
  const [img, setImg] = useState();

  return (
    <div className="image-upload-wrapper">
      <div className="image-upload-top">
        <input
          type="file"
          accept="image/png, image/jpeg"
          value={img}
          onChange={(e: any) => {
            UploadImageFile(
              card.player_name,
              card.collection_name,
              card.page_name,
              card.tab_name,
              e.target.files[0]
            );
          }}
        />
      </div>
      <div className="image-upload-bottom">
        <input
          className="image-input-field"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <div
          className="image-upload-button"
          onClick={() => {
            console.log("Uploading image link!");
            if (link.endsWith(".png") || link.endsWith(".jpg")) {
              UploadImageLink(card._id, link);
            } else {
              console.log("Not uploading since file not ending correctly.");
            }
          }}
        >
          Upload
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;
