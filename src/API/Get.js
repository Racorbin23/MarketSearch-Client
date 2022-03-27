import axios from "axios";

function GetAuctions(setData) {
  axios.get("http://192.168.1.25:3001/cards/get").then((res) => {
    setData(res.data);
  });
}

export { GetAuctions };
