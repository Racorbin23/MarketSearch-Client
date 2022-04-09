import React, { useState, useEffect } from "react";
import { GetSettings } from "../../API/Get";

function Blacklister() {
  const [config, setConfig] = useState({});
  const tab_names = [
    "MyTEAM BASE SET",
    "22 NBA SERIES 1",
    "PREMIUM",
    "HEAT CHECK",
  ];

  useEffect(() => {
    GetSettings(setConfig);
  }, []);

  const isChecked = (name) => {
    console.log(config);
    if (config.blacklisted_tab_names.includes(name)) {
      return true;
    } else {
      return false;
    }
  };

  if (Object.keys(config).length > 1) {
    return tab_names.map((item, i) => {
      return (
        <div key={i}>
          <input
            type="checkbox"
            checked={isChecked(item)}
            onChange={(e) => {
              console.log("Checked!");
            }}
          />
          <div>{item}</div>
        </div>
      );
    });
  } else {
    return <div>Loading...</div>;
  }
}

export default Blacklister;
