import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LinkButton from './LinkButton';
import validateSignIn from '../utils/validateSignIn';
import signInUser from '../services/signInService';

export default function SignIn({ onClick }) {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const input = {
      email: data.get('email'),
      password: data.get('password'),
      setShowError,
      setErrorMessage,
    };
    const validInput = validateSignIn(input);
    if (validInput) signInUser({ ...input, navigate });
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
        {showError && (
          <Alert severity="error" variant="filled">
            <AlertTitle align="center">{errorMessage}</AlertTitle>
          </Alert>
        )}
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
