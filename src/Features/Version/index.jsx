
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Title } from '@Shared';
import { config } from '@Core/Constants';

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
