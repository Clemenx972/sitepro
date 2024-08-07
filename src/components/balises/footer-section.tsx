import colorToggle from "../colorTogle";
import { useState, useEffect } from "react";
const Footer_Section = () => {
  const [colorState, setColorState] = useState(colorToggle.state);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorState(colorToggle.state);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <footer className='footer text-white'>
      <div className='container p-8 mt-4 flex justify-between'>
        <span className='text-muted'></span>
        <div>{colorState ? (
        <p className='text-secondary'>All rights reserved © 2024</p>
      ) : (
        <p className='text-coral'>All rights reserved © 2024</p>
      )}</div>
      </div>
    </footer>
  );
};

export default Footer_Section;
