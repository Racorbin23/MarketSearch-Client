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

export { UpdateSettings, SetConfigActive };
