import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LinkButton from './LinkButton';
import validateSignUp from '../utils/validateSignUp';
import signUpUser from '../services/signUpService';

export default function SignUp({ onClick }) {
  const [showError, setShowError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [signUpSuccessful, setSignUpSuccessful] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const input = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('new-password'),
      passwordConfirmation: data.get('confirm-password'),
      setShowError,
      setErrorMessage,
    };
    if (validateSignUp(input)) {
      signUpUser({ ...input, setSignUpSuccessful });
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
      >
        Sign up
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          sx={{ width: '100%' }}
        />
        <TextField
          margin="normal"
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          sx={{ width: '100%' }}
        />
        <TextField
          margin="normal"
          name="new-password"
          label="Password"
          type="password"
          id="new-password"
          autoComplete="new-password"
          sx={{ width: '100%' }}
        />
        <TextField
          margin="normal"
          name="confirm-password"
          label="Confirm Password"
          type="password"
          id="confirm-password"
          sx={{ width: '100%' }}
        />
        {showError && (
          <Alert severity="error" variant="filled">
            <AlertTitle align="center">{errorMessage}</AlertTitle>
          </Alert>
        )}
        {signUpSuccessful && (
          <Alert severity="success" variant="filled">
            <AlertTitle align="center">Registration successful!</AlertTitle>
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: '100%' }}
        >
          Sign Up
        </Button>
        <Grid container>
          <Grid sx={{ margin: 'auto' }}>
            <LinkButton text="Already have an account? Sign In" onClick={onClick} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
