
import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import { Title, useDebounce } from '@Shared';
import { storageService } from '@Core/Services';
import { config } from '@Core/Constants';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

export const Key = () => {
  
  const keyValue = storageService.get(config.key) || '';
  const keyInput = useFormInput(keyValue);

  const debouncedValue = useDebounce(keyInput.value, 1000);

  useEffect(
    () => {
      if (debouncedValue) {
        storageService.setKey(debouncedValue);
      } else {
        storageService.remove(config.key);
      }
    },
    [debouncedValue]
  );

  return (
    <Card className="card pale-green">
      <CardContent>
        <Title>PieSocket Key</Title>
        <TextField className="width-100" label="PieSocket Key" variant="standard" { ...keyInput } />
      </CardContent>
    </Card>
  );
};
