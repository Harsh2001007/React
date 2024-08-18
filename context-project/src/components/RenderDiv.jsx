import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function RenderDiv() {
  const value = useContext(GlobalContext);
  return (
    <>
      <div className="render">{value.testParent}</div>
      <button onClick={() => value.setTestParent("chal nikal yaha se")}>
        click me to revert
      </button>
    </>
  );
}
