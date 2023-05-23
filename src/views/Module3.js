import React from "react";

export default function Module3() {
  return (
    <div>
      <p>Module3</p>
    </div>
  );
}

const Module4 = ({ warnalain }) => {
  return (
    <div>
      <p style={{ color: warnalain ? warnalain : "red" }}>Ini module 4</p>
    </div>
  );
};

const Module5 = () => {
  return (
    <div>
      <p>Ini module 5</p>
    </div>
  );
};
export { Module4, Module5 };
