import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface SelectItem {
  label: string;
  value: string | number;
}

function OpSelect(props: { label: string; defaultValue?: string | number; items: SelectItem[]; onItemSelected: (event: React.ChangeEvent<{ value: unknown }>) => void }) {
  const { label, defaultValue, items, onItemSelected } = props;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onItemSelected(event);
  };

  return (
    <FormControl className='w-32'>
      <InputLabel>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={label}
        defaultValue={defaultValue}
        onChange={handleChange}>
        {items.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default OpSelect;
