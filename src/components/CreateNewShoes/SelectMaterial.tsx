import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectMaterialProps {
  material: string; // Define the type for 'brand' prop
  setMaterial: React.Dispatch<React.SetStateAction<string>>; // Define the type for 'setBrand' prop
}

export default function SelectMaterial({
  material,
  setMaterial,
}: SelectMaterialProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setMaterial(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130 }} required={true}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Материал
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={material}
          onChange={handleChange}
          autoWidth
          label="material"
        >
          <MenuItem value="Кожа">Кожа</MenuItem>
          <MenuItem value="Замша">Замша</MenuItem>
          <MenuItem value="Текстиль">Текстиль</MenuItem>
          <MenuItem value="Канвас">Канвас</MenuItem>
          <MenuItem value="Резина">Резина</MenuItem>
          <MenuItem value="Пластик">Пластик</MenuItem>
          <MenuItem value="ЭВА (этиленвинилацетат)">
            ЭВА (этиленвинилацетат)
          </MenuItem>
          <MenuItem value="Полиуретан (ПУ)">Полиуретан (ПУ)</MenuItem>
          <MenuItem value="Нубук">Нубук</MenuItem>
          <MenuItem value="Джинсовая ткань">Джинсовая ткань</MenuItem>
          <MenuItem value="ПВХ (поливинилхлорид)">
            ПВХ (поливинилхлорид)
          </MenuItem>
          <MenuItem value="Нейлон">Нейлон</MenuItem>
          <MenuItem value="Латекс">Латекс</MenuItem>
          <MenuItem value="Микрофибра">Микрофибра</MenuItem>
          <MenuItem value="Кордура">Кордура</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
