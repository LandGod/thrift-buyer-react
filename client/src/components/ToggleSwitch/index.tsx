import React, { useState } from "react";
import "./styles.css";

export default function ToggleSwitch({
  startingPosition,
}: {
  startingPosition: "left" | "right";
}) {

  const [position, setPosition] = useState(startingPosition)

  const toggleFunction = () => {
    if (position === 'left') {
      setPosition('right');
    } else {
      setPosition('left');
    }
  }

  return (
    <div className="switch__outline" onClick={toggleFunction} >
      <div className="switch__circle" style={{transform: `${ position === 'left' ? "translate(0)" : "translate(33px)"}`}}></div>
    </div>
  );
}
