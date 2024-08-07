// components/ToggleButton.tsx
"use client";
import { useState } from "react";
import App from "./text";

const Buttons = () => {
  const [active, setActive] = useState("b1"); // b1 = button1, b2 = button2, etc...
  return (
    <div className='flex gap-2'>
      <button
        className={`rounded-full w-64 ${
          active === "b1" ? "bg-blue-500" : "bg-blue-300"
        }`}
        onClick={() => setActive("b1")}
      >
        Button 1
      </button>
      <button
        className={`rounded-full w-64 ${
          active === "b2" ? "bg-blue-500" : "bg-blue-300"
        }`}
        onClick={() => setActive("b2")}
      >
        Button 2
      </button>
      <button
        className={`rounded-full w-64 ${
          active === "b3" ? "bg-blue-500" : "bg-blue-300"
        }`}
        onClick={() => setActive("b3")}
      >
        Button 3
      </button>
    </div>
  );
};

const colorToggle: React.FC = () => {
  const [isTrue, setIsTrue] = useState(true);

  const handleClick = () => {
    setIsTrue((prevState) => !prevState);
  };

  return (
    <div className='flex flex-col items-center'>
      <button
        onClick={handleClick}
        className='p-2 bg-blue-500 text-white rounded-md'
      >
        {isTrue ? "True" : "False"}
      </button>
      <p className='mt-2 text-lg'>Current value: {isTrue.toString()}</p>
      <Buttons />
      <button onClick={App} />
      <p className={App() ? "text-primary" : "text-darkprimary"}>test text</p>
    </div>
  );
};

export default colorToggle;
