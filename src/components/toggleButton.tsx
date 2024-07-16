// ToggleButton.tsx
"use client";
import React from "react";
import colorToggle from "./colorTogle";

const ToggleButton: React.FC = () => {
  const handleButtonClick = () => {
    colorToggle.toggle();
    console.log(colorToggle.state); // You can see the state in the console
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className='px-4 py-2 bg-blue-500 text-white rounded'
      >
        Toggle Color
      </button>
    </>
  );
};

export default ToggleButton;
