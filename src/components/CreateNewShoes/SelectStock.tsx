import React, { useState } from 'react';

interface ShoeData {
  [color: string]: {
    sizes: { [size: string]: number };
  };
}

const SelectStock: React.FC = () => {
  const [shoeData, setShoeData] = useState<ShoeData>({
    red: {
      sizes: {
        '37': 10,
        '38': 5,
        '39': 3,
      },
    },
  });

  const handleInputChange = (color: string, size: string, value: number) => {
    setShoeData((prevData) => ({
      ...prevData,
      [color]: {
        ...prevData[color],
        sizes: {
          ...prevData[color]?.sizes,
          [size]: value,
        },
      },
    }));
  };

  const handleAddSize = (color: string) => {
    setShoeData((prevData) => ({
      ...prevData,
      [color]: {
        ...prevData[color],
        sizes: {
          ...prevData[color]?.sizes,
          // Initialize the new size with a default value of 0
          [Math.random().toString()]: 0,
        },
      },
    }));
  };

  return (
    <div>
      {Object.keys(shoeData).map((color) => (
        <div key={color}>
          <h3>{color}:</h3>
          {Object.entries(shoeData[color]?.sizes || {}).map(([size, value]) => (
            <div key={size}>
              <label htmlFor={`${color}-${size}`}>{`Size ${size}:`}</label>
              <input
                type="number"
                id={`${color}-${size}`}
                value={value}
                onChange={(e) =>
                  handleInputChange(color, size, parseInt(e.target.value))
                }
              />
            </div>
          ))}
          <button onClick={() => handleAddSize(color)}>Add Size</button>
        </div>
      ))}

      {/* Display the collected data */}
      <pre>{JSON.stringify(shoeData, null, 2)}</pre>
    </div>
  );
};

export default SelectStock;
