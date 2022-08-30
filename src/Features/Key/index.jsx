
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import { Title } from '@Shared/Title';
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

  return (
    <Card className="card pale-yellow">
      <CardContent>
        <Title>PieSocket Key</Title>
        <TextField className="width-100" label="PieSocket Key" variant="standard" { ...keyInput } />
      </CardContent>
    </Card>
  );
};
