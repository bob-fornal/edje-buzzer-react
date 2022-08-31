
import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import { Title } from '@Shared/Title';
import useDebounce from '@Shared/UseDebounce';

import { storage } from '@Core/Services/Storage.service';

import config from '@Core/Constants/config.json';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

export const Key = () => {
  
  const keyValue = storage.get(config.key) || '';
  const keyInput = useFormInput(keyValue);

  const debouncedValue = useDebounce(keyInput.value, 1000);

  useEffect(
    () => {
      if (debouncedValue) {
        storage.setKey(debouncedValue);
      } else {
        storage.remove(config.key);
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
