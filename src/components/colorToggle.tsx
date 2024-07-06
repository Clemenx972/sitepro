// components/ToggleButton.tsx
"use client";
import { useState } from "react";

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
    </div>
  );
};

export default colorToggle;
