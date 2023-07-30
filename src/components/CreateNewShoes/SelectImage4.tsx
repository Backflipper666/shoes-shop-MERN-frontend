import React, { ChangeEvent } from 'react';

interface SelectImageProps {
  onImageSelect4: (file: File | null) => void;
}

const SelectImage4: React.FC<SelectImageProps> = ({ onImageSelect4 }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    onImageSelect4(file);
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
        Select Image 4
      </label>
    </div>
  );
};

export default SelectImage4;
