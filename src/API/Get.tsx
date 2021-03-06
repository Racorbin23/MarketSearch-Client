import axios from "axios";

let URL = "https://infinite-mesa-46973.herokuapp.com/";
if (process.env.NODE_ENV === "development") {
  console.log("In Development");

  const IP = "192.168.1.25";
  const PORT = "3000";
  URL = `http://${IP}:${PORT}/`;
}

function GetAuctions(setData: Function) {
  axios.get(URL + "cards/getAllAuctions").then((res) => {
    setData(res.data);
  });
}

function GetSettings(setData: Function) {
  axios.get(URL + "settings/get").then((res) => {
    setData(res.data);
  });
}

export { GetAuctions, GetSettings, URL };
