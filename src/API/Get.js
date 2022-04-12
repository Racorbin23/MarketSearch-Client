import axios from "axios";

const IP = "192.168.1.25";
const PORT = "3001";
const URL = `http://${IP}:${PORT}/`;

function GetAuctions(setData) {
  axios.get(URL + "cards/getAuctions").then((res) => {
    setData(res.data);
  });
}

function GetSettings(setData) {
  axios.get(URL + "settings/get").then((res) => {
    setData(res.data);
  });
}

export { GetAuctions, GetSettings, URL };
