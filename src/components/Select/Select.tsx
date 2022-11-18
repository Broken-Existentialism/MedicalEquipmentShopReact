import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

interface ISelectProps{
  name: string,
  items: string[],
  handleChangeProps: any
}

export default function SelectComponent({items, name, handleChangeProps}:ISelectProps) {

  const [selectValue, setSelectValue] = React.useState<string[]>([]);

  const handleChange = (event: any) => {
    //const { target: { value }} = event;
    setSelectValue(event.target.value);
    handleChangeProps(event.target.value)
  };

  return (
    <Box sx={{marginBottom:'20px'}}>
      <FormControl variant="standard" sx={{ width: '100%' }}>
        <InputLabel>{name}</InputLabel>
        <Select
          value={selectValue}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>

          {items.map((item: any, index: number) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
          ))}

        </Select>
      </FormControl>
    </Box>
  );
}