import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectSeasonProps {
  season: string; // Define the type for 'season' prop
  setSeason: React.Dispatch<React.SetStateAction<string>>; // Define the type for 'setSeason' prop
}

export default function SelectSeason({ season, setSeason }: SelectSeasonProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setSeason(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }} required={true}>
        <InputLabel id="demo-simple-select-autowidth-label">Сезон</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={season}
          onChange={handleChange}
          autoWidth
          label="season"
        >
          <MenuItem value="Лето">Лето</MenuItem>
          <MenuItem value="Зима">Зима</MenuItem>
          <MenuItem value="Деми">Демисезон</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
