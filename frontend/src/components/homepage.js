import * as React from 'react';
import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function SignInSide() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid
      container
      sx={{
        maxWidth: '55vw', margin: 'auto', marginTop: '10vh', height: '60vh',
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
          width: '50%',
          backgroundImage: 'url(https://shorturl.at/hoW79)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        component={Paper}
        elevation={6}
        square
        sx={{ width: '50%' }}
      >
        <Box
          sx={{
            my: 8,
            mx: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ width: '100%' }}
            />
            <TextField
              margin="normal"
              required
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
                <Link href="google.com" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="google.com" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
