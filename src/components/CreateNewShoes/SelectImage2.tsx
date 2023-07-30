import React, { ChangeEvent } from 'react';

interface SelectImageProps {
  onImageSelect2: (file: File | null) => void;
}

const SelectImage2: React.FC<SelectImageProps> = ({ onImageSelect2 }) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    onImageSelect2(file);
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
        Select Image 2
      </label>
    </div>
  );
};

export default SelectImage2;
