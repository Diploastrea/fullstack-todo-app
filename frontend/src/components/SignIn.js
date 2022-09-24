import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinkButton from './LinkButton';

export default function SignIn({ onClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
      >
        Sign in
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          label="Email Address"
          name="email"
          autoComplete="email"
          sx={{ width: '100%' }}
        />
        <TextField
          margin="normal"
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{ width: '100%' }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: '100%' }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <LinkButton text="Forgot password?" />
          </Grid>
          <Grid item>
            <LinkButton text="Don't have an account? Sign Up" onClick={onClick} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
