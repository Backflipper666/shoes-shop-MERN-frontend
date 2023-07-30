//SelectImage3.tsx
import React, { ChangeEvent } from 'react';

interface SelectImageProps {
  onImageSelect3: (file: File | null) => void;
}

const SelectImage3: React.FC<SelectImageProps> = ({ onImageSelect3 }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    onImageSelect3(file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="imageInput"
      />
      <label htmlFor="imageInput" style={{ cursor: 'pointer' }}>
        Select Image 3
      </label>
    </div>
  );
};

export default SelectImage3;
