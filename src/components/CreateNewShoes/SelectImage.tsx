import React, { ChangeEvent } from 'react';

interface SelectImageProps {
  onImageSelect: (file: File | null) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({ onImageSelect }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    onImageSelect(file);
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
        Select Image
      </label>
    </div>
  );
};

export default SelectImage;
