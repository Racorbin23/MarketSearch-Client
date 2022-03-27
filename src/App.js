import React, { useEffect, useState } from "react";
import { GetAuctions } from "./API/Get";
import AuctionsContext from "./Contexts/AuctionsContext";
import LandingPage from "./Pages/LandingPage/LandingPage";

import newCard from "./Card";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    if (Object.keys(data).length < 2) {
      GetAuctions(setData);
    }
  }, [data]);

  return (
    <div className="app">
      <AuctionsContext.Provider value={data}>
        <LandingPage />
      </AuctionsContext.Provider>
    </div>
  );
}

export default App;
