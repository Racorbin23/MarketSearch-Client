import axios from "axios";
import { URL } from "./Get";

function UpdateSettings(
  blacklisted_collection_names,
  blacklisted_page_names,
  blacklisted_tab_names,
  active
) {
  axios
    .post(URL + "settings/updateProfile", {
      blacklisted_collection_names: blacklisted_collection_names,
      blacklisted_page_names: blacklisted_page_names,
      blacklisted_tab_names: blacklisted_tab_names,
      active: active,
    })
    .then((res) => {
      console.log(res);
    });
}

function SetConfigActive(config_name, active) {
  axios
    .post(URL + "settings/setActive", {
      name: config_name,
      active: active,
    })
    .then((res) => {
      console.log(res);
    });
}

function Edit(id, newName, newCollectionName, newPageName, newTabName) {
  axios
    .post(URL + "cards/edit", {
      id: id,
      newPlayerName: newName,
      newCollectionName: newCollectionName,
      newPageName: newPageName,
      newTabName: newTabName,
    })
    .then((res) => {
      console.log(res);
    });
}

function UploadImage(id, image) {
  axios
    .post(URL + "cards/uploadImage", {
      id: id,
      image: image,
    })
    .then((res) => {
      console.log(res);
    });
}

function MigrateAuctions(old_card, new_card) {
  axios
    .post(URL + "cards/migrateAuctions", {
      old_card_id: old_card._id,
      new_card_id: new_card._id,
    })
    .then((res) => {
      console.log(res);
    });
}

function DeleteImage(id) {
  axios
    .post(URL + "cards/deleteImage", {
      id: id,
    })
    .then((res) => {
      console.log(res);
    });
}

function DeleteCard(id) {
  axios
    .post(URL + "cards/delete", {
      id: id,
    })
    .then((res) => {
      console.log(res);
    });
}

export {
  UpdateSettings,
  SetConfigActive,
  Edit,
  DeleteCard,
  DeleteImage,
  UploadImage,
  MigrateAuctions,
};
