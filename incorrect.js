//incorrect code of ColorPalette.js

import { useState, useEffect } from "react";
import SavedPalettes from "./SavedPalettes";

const ColorPalatte = () => {
  const [colors, setColors] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  // Function to generate a random color
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const randomPalette = Array.from({ length: 5 }, generateRandomColor);
    setColors(randomPalette);
  }, []);

  const generateNewPalette = () => {
    const randomPalette = Array.from({ length: 5 }, generateRandomColor);
    setSavedPalettes(randomPalette);
  };

  const savePalette = () => {
    setSavedPalettes([...savedPalettes, colors]);
  };

  return (
    <div>
      <h1>Color Palette Generator</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div
            key={color}
            className='color-swatch'
            style={{ backgroundColor: color }}
            
          />
        ))}
      </div>
      <button>Generate New Palette</button>
      <SavedPalettes savedPalettes={savedPalettes} />
    </div>
  );
};

export default ColorPalette;
