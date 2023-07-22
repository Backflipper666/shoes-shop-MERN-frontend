//CreateNewShoes.tsx
import React, { useState } from 'react';
import './CreateNewShoes.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectBrand from './SelectBrand';
import SelectMaterial from './SelectMaterial';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CreateShoes = () => {
  const [brand, setBrand] = useState<string>(''); // Define the type for 'brand' state variable
  const [material, setMaterial] = useState<string>('');
  const [isPriceNegative, setIsPriceNegative] = useState(false);

  const handleSubmit = () => {
    console.log(brand);
    console.log(material);
  };

  const checkPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const priceValue = parseFloat(event.target.value);
    setIsPriceNegative(priceValue < 0);
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

      <SelectMaterial material={material} setMaterial={setMaterial} />

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleSubmit}>
          Создать
        </Button>
      </Stack>
    </div>
  );
};

export default CreateShoes;
