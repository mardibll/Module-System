import React from "react";
import Module2, { Module6 } from "./Module2";
import Module3, { Module4, Module5 } from "./Module3";

export default function Module1() {
  return (
    <div>
      <p>Module1</p>
      <Module2 backgroundColor="red" />
      <Module3 />
      <Module4 warnalain="blue" />
      <Module5 />
      <Module6 discrpsi="Saya menampilkan Module6" />
    </div>
  );
}
