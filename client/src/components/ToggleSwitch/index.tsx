import React, { useState } from "react";
import "./styles.css";

export default function ToggleSwitch({
  startingPosition,
  callback,
}: {
  startingPosition: "left" | "right";
  callback: (leftOrRight: "left" | "right") => void;
}) {
  const [position, setPosition] = useState(startingPosition);

  const toggleFunction = () => {
    if (position === "left") {
      setPosition("right");
      callback("right");
    } else {
      setPosition("left");
      callback("left");
    }
  };

  return (
    <div className="switch__outline" onClick={toggleFunction}>
      <div
        className="switch__circle"
        style={{
          transform: position === "left" ? "translate(0)" : "translate(33px)",
        }}
      ></div>
    </div>
  );
}
