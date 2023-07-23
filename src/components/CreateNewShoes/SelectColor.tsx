import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectColorProps {
  color: string; // Define the type for 'brand' prop
  setColor: React.Dispatch<React.SetStateAction<string>>; // Define the type for 'setBrand' prop
}

export default function SelectColor({ color, setColor }: SelectColorProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 130 }} required={true}>
        <InputLabel id="demo-simple-select-autowidth-label">Цвет</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={color}
          onChange={handleChange}
          autoWidth
          label="color"
        >
          <MenuItem value="Красный">Красный</MenuItem>
          <MenuItem value="Синий">Синий</MenuItem>
          <MenuItem value="Зеленый">Зеленый</MenuItem>
          <MenuItem value="Желтый">Желтый</MenuItem>
          <MenuItem value="Черный">Черный</MenuItem>
          <MenuItem value="Белый">Белый</MenuItem>
          <MenuItem value="Серый">Серый</MenuItem>
          <MenuItem value="Розовый">Розовый</MenuItem>
          <MenuItem value="Фиолетовый">Фиолетовый</MenuItem>
          <MenuItem value="Оранжевый">Оранжевый</MenuItem>
          <MenuItem value="Коричневый">Коричневый</MenuItem>
          <MenuItem value="Голубой">Голубой</MenuItem>
          <MenuItem value="Разноцветный">Разноцветный</MenuItem>
          <MenuItem value="Малиновый">Малиновый</MenuItem>
          <MenuItem value="Бирюзовый">Бирюзовый</MenuItem>
          <MenuItem value="Бежевый">Бежевый</MenuItem>
          <MenuItem value="Фуксия">Фуксия</MenuItem>
          <MenuItem value="Лаймовый">Лаймовый</MenuItem>
          <MenuItem value="Марсала">Марсала</MenuItem>
          <MenuItem value="Терракота">Терракота</MenuItem>
          <MenuItem value="Индиго">Индиго</MenuItem>
          <MenuItem value="Шоколадный">Шоколадный</MenuItem>
          <MenuItem value="Лимонный">Лимонный</MenuItem>
          <MenuItem value="Бордовый">Бордовый</MenuItem>
          <MenuItem value="Лиловый">Лиловый</MenuItem>
          <MenuItem value="Мятный">Мятный</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
