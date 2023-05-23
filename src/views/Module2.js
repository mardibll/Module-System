import React from "react";

export default function Module2({ backgroundColor }) {
  return (
    <div>
      <p style={{ backgroundColor }}>Module2</p>
    </div>
  );
}
function Module6({ discrpsi }) {
  return (
    <div>
      <p>Module6</p>
      <p>{discrpsi}</p>
    </div>
  );
}
export { Module6 };
