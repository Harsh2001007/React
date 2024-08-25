import React from "react";
import ChildC from "./ChildC";
import { useContext } from "react";
import { data2, data3 } from "../App";

export default function ChildB({ name }) {
  const ctx = useContext(data2);
  const ctxPer = useContext(data3);
  return (
    <div>
      <button onClick={() => ctxPer.setter("bye bye")}></button>
      <button onClick={() => ctxPer.setter("sigma")}></button>
      child B {name} and i am a {ctx}. people just made me {ctxPer.per}
    </div>
  );
}
