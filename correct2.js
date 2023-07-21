//correct code of SavedPalette.js

import React from "react";

const SavedPalettes = ({ savedPalettes }) => {
  return (
    <div>
      <h2>Saved Color Palettes</h2>
      {savedPalettes.map((palette, paletteIndex) => (
        <div key={paletteIndex} className='saved-palette'>
          {palette.map((color, colorIndex) => (
            <div
              key={colorIndex}
              className='saved-color-swatch'
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SavedPalettes;
