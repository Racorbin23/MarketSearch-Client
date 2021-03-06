import axios from "axios";
import { CardInterface } from "../Helper/InterfaceObjects";
import { URL } from "./Get";

function UpdateSettings(
  blacklisted_collection_names: string[],
  blacklisted_page_names: string[],
  blacklisted_tab_names: string[],
  active: any
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
function Edit(
  id: string,
  newName: string,
  newCollectionName: string,
  newPageName: string,
  newTabName: string
) {
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

function UploadImageFile(
  player_name: string,
  collection_name: string,
  page_name: string,
  tab_name: string,
  image: File
) {
  axios
    .post(URL + "cards/uploadImageFile", {
      player_name: player_name,
      collection_name: collection_name,
      page_name: page_name,
      tab_name: tab_name,
      image: image,
    })
    .then((res) => {
      console.log(res);
    });
}

function UploadImageLink(id: string, image: string) {
  axios
    .post(URL + "cards/uploadImageLink", {
      link: image,
      id: id,
    })
    .then((res) => {
      console.log(res);
    });
}

function MigrateAuctions(old_card: CardInterface, new_card: CardInterface) {
  axios
    .post(URL + "cards/migrateAuctions", {
      old_card_id: old_card._id,
      new_card_id: new_card._id,
    })
    .then((res) => {
      console.log(res);
    });
}

function DeleteImage(id: string) {
  axios
    .post(URL + "cards/deleteImage", {
      id: id,
    })
    .then((res) => {
      console.log(res);
    });
}

function DeleteCard(id: string) {
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
  Edit,
  DeleteCard,
  DeleteImage,
  UploadImageLink,
  UploadImageFile,
  MigrateAuctions,
};
