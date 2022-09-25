import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import img from '../assets/pictures/not-found.jpg';

export default function NotFound() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        margin: '5vh auto',
        maxWidth: '55vw',
      }}
    >
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#f6f6f6' },
        }}
      />
      <Grid
        item
        sx={{
          height: '600px',
          width: '600px',
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
        }}
      />
      <Grid item>
        <Button
          href="/landing"
          size="large"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ marginTop: 5 }}
        >
          Landing Page
        </Button>
      </Grid>
    </Grid>
  );
}
