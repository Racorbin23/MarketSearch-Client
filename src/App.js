import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuctionsContext from "./Helper/AuctionsContext";

import LandingPage from "./Pages/LandingPage/LandingPage";

import { GetAuctions } from "./API/Get";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    GetAuctions(setData);
  }, []);

  return (
    <div className="app">
      <AuctionsContext.Provider value={data}>
        <BrowserRouter>
          <Routes>
            <Route path="/MarketSearch-Client" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </AuctionsContext.Provider>
    </div>
  );
}

export default App;
