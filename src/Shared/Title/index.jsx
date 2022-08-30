
import Typography from '@mui/material/Typography';

export const Title = ({ children }) => {
  return (
    <Typography className='bold' gutterBottom variant="h5" component="div">
      { children }
    </Typography>
  );
};
