//incorrect code of SavedPalette.js

import React from "react";

const SavedPalettes = ({ savedPalette }) => {
  return (
    <div>
      <h2>Saved Color Palettes</h2>
      {savedPalettes.map((palette, paletteIndex) => (
        <div key={`palette-${paletteIndex}`} className='saved-palette'>
          {palette.map((color, colorIndex) => (
            <div
              key={`color-${colorIndex}`}
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



