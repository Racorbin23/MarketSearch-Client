import axios from "axios";
var URL;
if (process.env.NODE_ENV === "development") {
  const IP = "192.168.1.25";
  const PORT = "3001";
  URL = `http://${IP}:${PORT}/`;
} else {
  URL = "https://infinite-mesa-46973.herokuapp.com/";
}

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
