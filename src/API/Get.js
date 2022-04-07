import axios from "axios";

function GetAuctions(setData) {
  axios.get("http://192.168.1.25:3001/cards/getAuctions").then((res) => {
    setData(res.data);
  });
}

function GetSettings(setData) {
  axios.get("http://192.168.1.25:3001/settings/get").then((res) => {
    setData(res.data);
  });
}

export { GetAuctions, GetSettings };
