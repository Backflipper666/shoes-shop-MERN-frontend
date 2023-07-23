import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectBrandProps {
  brand: string; // Define the type for 'brand' prop
  setBrand: React.Dispatch<React.SetStateAction<string>>; // Define the type for 'setBrand' prop
}

export default function SelectBrand({ brand, setBrand }: SelectBrandProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setBrand(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }} required={true}>
        <InputLabel id="demo-simple-select-autowidth-label">Бренд</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={brand}
          onChange={handleChange}
          autoWidth
          label="brand"
        >
          <MenuItem value="Adidas">Adidas</MenuItem>
          <MenuItem value="Nike">Nike</MenuItem>
          <MenuItem value="Puma">Puma</MenuItem>
          <MenuItem value="FILA">FILA</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
