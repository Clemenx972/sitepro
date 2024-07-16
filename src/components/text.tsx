"use client";
import { useState } from "react";

function App() {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  return isPressed;
  // return (
  //   <div className='App'>
  //     <button
  //       onClick={handleButtonClick}
  //       className='px-4 py-2 bg-blue-500 text-red-600 rounded'
  //     >
  //       Toggle Color
  //     </button>
  //     <p className={isPressed ? "text-primary" : "text-darkprimary"}>
  //       This text changes color!
  //     </p>
  //   </div>
  // );
}

export default App;
