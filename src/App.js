import React, { useState, useEffect } from "react";
import LandingPage from "./Pages/SearchingPage/SearchingPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AuctionsContext from "./Helper/AuctionsContext";
import { GetAuctions } from "./API/Get";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
            <Route path="/" element={<LandingPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
      </AuctionsContext.Provider>
    </div>
  );
}

export default App;
