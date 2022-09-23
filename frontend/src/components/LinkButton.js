import Button from '@mui/material/Button';

export default function LinkButton({ onClick, text }) {
  return (
    <Button
      disableRipple
      onClick={onClick}
      sx={{
        padding: 0,
        textTransform: 'none',
        '&.MuiButtonBase-root:hover': {
          bgcolor: 'transparent',
          textDecoration: 'underline',
        },
      }}
    >
      {text}
    </Button>
  );
}
