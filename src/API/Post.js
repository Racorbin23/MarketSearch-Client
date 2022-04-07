import axios from "axios";

function UpdateSettings(
  blacklisted_collection_names,
  blacklisted_page_names,
  blacklisted_tab_names,
  active
) {
  axios
    .post("http://192.168.1.25:3001/settings/updateProfile", {
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
    .post("http://192.168.1.25:3001/settings/setActive", {
      name: config_name,
      active: active,
    })
    .then((res) => {
      console.log(res);
    });
}

export { UpdateSettings, SetConfigActive };
