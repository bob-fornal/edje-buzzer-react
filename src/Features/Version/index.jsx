
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Title } from '@Shared/Title';
import config from '@Core/Constants/config.json';

export const Version = () => {
  const version = config.version;

  return (
    <Card className="card pale-yellow">
      <CardContent>
        <Title>Version</Title>
        <div>{ version }</div>
      </CardContent>
    </Card>
  );
};
