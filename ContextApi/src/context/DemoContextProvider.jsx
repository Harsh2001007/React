import React from "react";
import GlobalDemoContext from "./DemoContext.js";
import { useState } from "react";

function DemoContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <GlobalDemoContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalDemoContext.Provider>
  );
}

export default DemoContextProvider;
