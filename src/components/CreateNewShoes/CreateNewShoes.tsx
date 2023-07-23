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

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleSubmit}>
          Создать
        </Button>
      </Stack>
    </div>
  );
};

export default CreateShoes;
