import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
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
    const validInput = validateSignUp(input);
    if (validInput) signUpUser({ ...input, setSignUpSuccessful });
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') return;
    setSignUpSuccessful(false);
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
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          sx={{ width: '100%' }}
        />
        <TextField
          margin="normal"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          sx={{ width: '100%' }}
        />
        <TextField
          margin="normal"
          name="new-password"
          label="Password"
          type="password"
          autoComplete="new-password"
          sx={{ width: '100%' }}
        />
        <TextField
          margin="normal"
          name="confirm-password"
          label="Confirm Password"
          type="password"
          sx={{ width: '100%' }}
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
          Sign Up
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={signUpSuccessful}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert severity="success" variant="filled">
            Registration successful! You can now sign into your account!
          </Alert>
        </Snackbar>
        <Grid container>
          <Grid sx={{ margin: 'auto' }}>
            <LinkButton text="Already have an account? Sign In" onClick={onClick} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
