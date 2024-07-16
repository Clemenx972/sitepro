// ColorText.tsx
"use client";
import React, { useEffect, useState } from "react";
import colorToggle from "./colorTogle";

const ColorText: React.FC = () => {
  const [colorState, setColorState] = useState<boolean>(colorToggle.state);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100); // Polling every 100ms to check for state changes
    return () => clearInterval(interval);
  }, []);

  return (
    <p className={colorState ? "text-red-500" : "text-green-500"}>
      This text changes color!
    </p>
  );
};

export default ColorText;
