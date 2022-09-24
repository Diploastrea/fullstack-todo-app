import React, { useState } from 'react';
import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import img from '../assets/pictures/to-do-list.jpg';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function Homepage() {
  const [showSignIn, setShownSignIn] = useState(true);

  const handleClick = () => {
    setShownSignIn(!showSignIn);
  };

  return (
    <Grid
      container
      sx={{
        maxWidth: '55vw', margin: 'auto', marginTop: '10vh', height: '70vh',
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
          width: '55%',
          backgroundImage: `url(${img})`,
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
        sx={{ width: '45%' }}
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
          {showSignIn ? (
            <SignIn onClick={handleClick} />
          ) : (
            <SignUp onClick={handleClick} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
