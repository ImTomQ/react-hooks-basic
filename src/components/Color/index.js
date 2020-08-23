import React, { useState } from "react";

function rdColor() {
  const color = ["yellow", "blue", "orange", "red", "pink"];
  const random = Math.trunc(Math.random() * 5);
  return color[random];
}
export default function Color() {
  const [color, setColor] = useState(() => {
    const init = localStorage.getItem("color") || "black";
    return init;
  });
  function handleChangeColor() {
    const newColor = rdColor();
    setColor(newColor);
    localStorage.setItem("color", newColor);
  }
  return (
    <>
      <div onClick={handleChangeColor} style={{ backgroundColor: color }}>
        <p>Hello from Color</p>
      </div>
    </>
  );
}
