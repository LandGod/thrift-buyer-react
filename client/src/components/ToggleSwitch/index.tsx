import React, { useRef } from "react";

export default function ToggleSwitch({
  startingPosition,
}: {
  startingPosition: "left" | "right";
}) {

  const animator = useRef(null);

  return (
    <svg width="24" height="24">
      <rect width="24" height="24" fill="none" rx="0" ry="0" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 14.5C8.38071 14.5 9.5 13.3807 9.5 12C9.5 10.6193 8.38071 9.5 7 9.5C5.61929 9.5 4.5 10.6193 4.5 12C4.5 13.3807 5.61929 14.5 7 14.5Z"
        fill="#22a6b3"
      >
        <animate
          ref={animator}
          attributeName="points"
          dur="500ms"
          d="M17 14.5C15.6193 14.5 14.5 13.3807 14.5 12C14.5 10.6193 15.6193 9.5 17 9.5C18.3807 9.5 19.5 10.6193 19.5 12C19.5 13.3807 18.3807 14.5 17 14.5Z"
        />
      </path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7H17C19.76 7 22 9.24 22 12C22 14.76 19.76 17 17 17ZM7 8.2C4.9 8.2 3.2 9.9 3.2 12C3.2 14.1 4.9 15.8 7 15.8H17C19.1 15.8 20.8 14.09 20.8 12C20.8 9.9 19.09 8.2 17 8.2H7Z"
        fill="#000000"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 17H7C4.24 17 2 14.76 2 12C2 9.24 4.24 7 7 7H17C19.76 7 22 9.24 22 12C22 14.76 19.76 17 17 17ZM7 8.2C4.9 8.2 3.2 9.9 3.2 12C3.2 14.1 4.9 15.8 7 15.8H17C19.1 15.8 20.8 14.09 20.8 12C20.8 9.9 19.09 8.2 17 8.2H7Z"
        fill="black"
        fill-opacity="0.01"
      />
    </svg>
  );
}
