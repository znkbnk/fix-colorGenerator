//correct code of ColorPalette.js

import React, { useState, useEffect } from "react";
import SavedPalettes from "./SavedPalettes";

const ColorPalette = () => {
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

  // Generate random color palette on component mount
  useEffect(() => {
    const randomPalette = Array.from({ length: 5 }, generateRandomColor);
    setColors(randomPalette);
  }, []);

  // Function to generate a new random color palette
  const generateNewPalette = () => {
    const randomPalette = Array.from({ length: 5 }, generateRandomColor);
    setColors(randomPalette);
  };

  // Function to save the current color palette
  const savePalette = () => {
    setSavedPalettes([...savedPalettes, colors]);
  };

  return (
    <div>
      <h1>Color Palette Generator</h1>
      <div className='color-palette'>
        {colors.map((color, index) => (
          <div
            key={index}
            className='color-swatch'
            style={{ backgroundColor: color }}
            onClick={savePalette}
          />
        ))}
      </div>
      <button onClick={generateNewPalette}>Generate New Palette</button>
      <SavedPalettes savedPalettes={savedPalettes} />
    </div>
  );
};

export default ColorPalette;
