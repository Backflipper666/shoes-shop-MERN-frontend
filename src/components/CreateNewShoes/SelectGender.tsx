import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectGenderProps {
  gender: string; // Define the type for 'gender' prop
  setGender: React.Dispatch<React.SetStateAction<string>>; // Define the type for 'setGender' prop
}

export default function SelectGender({ gender, setGender }: SelectGenderProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }} required={true}>
        <InputLabel id="demo-simple-select-autowidth-label">Пол</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={gender}
          onChange={handleChange}
          autoWidth
          label="gender"
        >
          <MenuItem value="Мужской">Мужской</MenuItem>
          <MenuItem value="Женский">Женский</MenuItem>
          <MenuItem value="Детский">Детский</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
