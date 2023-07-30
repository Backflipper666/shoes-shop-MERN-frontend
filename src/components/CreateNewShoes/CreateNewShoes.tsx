//CreateNewShoes.tsx
import React, { useState } from 'react';
import './CreateNewShoes.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectBrand from './SelectBrand';
import SelectMaterial from './SelectMaterial';
import SelectStock from './SelectStock';
import SelectColor from './SelectColor';
import SelectGender from './SelectGender';
import SelectSeason from './SelectSeason';
import SelectImage from './SelectImage';
import SelectImage2 from './SelectImage2';
import SelectImage3 from './SelectImage3';
import SelectImage4 from './SelectImage4';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CreateShoes = () => {
  const [brand, setBrand] = useState<string>(''); // Define the type for 'brand' state variable
  const [material, setMaterial] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [season, setSeason] = useState<string>('');
  const [isPriceNegative, setIsPriceNegative] = useState(false);
  const [isStockNegative, setIsStockNegative] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImage2, setSelectedImage2] = useState<File | null>(null);
  const [selectedImage3, setSelectedImage3] = useState<File | null>(null);
  const [selectedImage4, setSelectedImage4] = useState<File | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageSelect = (file: File | null) => {
    setSelectedImage(file);
    if (file) {
      setSelectedImages((prevImages) => [...prevImages, file]);
    }
  };

  const handleImageSelect2 = (file: File | null) => {
    setSelectedImage2(file);
    if (file) {
      setSelectedImages((prevImages) => [...prevImages, file]);
    }
  };

  const handleImageSelect3 = (file: File | null) => {
    setSelectedImage3(file);
    if (file) {
      setSelectedImages((prevImages) => [...prevImages, file]);
    }
  };

  const handleImageSelect4 = (file: File | null) => {
    setSelectedImage4(file);
    if (file) {
      setSelectedImages((prevImages) => [...prevImages, file]);
    }
  };

  const handleSubmit = () => {
    console.log(brand);
    console.log(material);
  };

  const checkPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const priceValue = parseFloat(event.target.value);
    setIsPriceNegative(priceValue < 0);
  };

  const checkStock = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stockValue = parseFloat(event.target.value);
    setIsStockNegative(stockValue < 0);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        className="create-shoes__form"
      >
        <TextField
          id="outlined-basic"
          label="Название"
          variant="outlined"
          inputProps={{
            maxLength: 50,
          }}
          required={true}
        />

        <TextField
          id="filled-multiline-static"
          label="Описание"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          required={true}
        />
      </Box>
      <SelectBrand brand={brand} setBrand={setBrand} />

      <TextField
        id="outlined-number"
        label="Цена"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={checkPrice}
        required={true}
      />

      <TextField
        id="outlined-old-number"
        label="Старая цена (если на распродаже)"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={checkPrice}
      />

      <SelectMaterial material={material} setMaterial={setMaterial} />
      <SelectColor color={color} setColor={setColor} />

      <TextField
        id="outlined-stock"
        label="Количество"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={checkStock}
        required={true}
      />

      <TextField
        id="outlined-size"
        label="Размер"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        required={true}
      />

      <SelectGender gender={gender} setGender={setGender} />
      <SelectSeason season={season} setSeason={setSeason} />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="На распродаже"
        />{' '}
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Новая коллекция"
        />
      </FormGroup>

      <div className="create-shoes__images">
        <div className="create-shoes__image-container">
          <input type="file" accept="image/*" id="image1" />
          <label htmlFor="image1">Выбрать изображение</label>
        </div>
        <div className="create-shoes__image-container">
          <input type="file" accept="image/*" id="image2" />
          <label htmlFor="image2">Выбрать изображение</label>
        </div>
        <div className="create-shoes__image-container">
          <input type="file" accept="image/*" id="image3" />
          <label htmlFor="image3">Выбрать изображение</label>
        </div>
        <div className="create-shoes__image-container">
          <input type="file" accept="image/*" id="image4" />
          <label htmlFor="image4">Выбрать изображение</label>
        </div>
      </div>

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleSubmit}>
          Создать
        </Button>
      </Stack>
    </div>
  );
};

export default CreateShoes;
