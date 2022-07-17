import { Typography, Button } from '@mui/material';
import React from 'react';

const SuccessState = ({ resetForm }) => {
  return (
    <>
      <Typography gutterBottom variant="h5">
        Thank you! 🙌
      </Typography>
      <Typography
        variant="body2"
        color="secondary"
        whiteSpace="pre-line"
        sx={{ textAlign: 'center' }}
        gutterBottom
      >
        {'Your message has been accepted, \nwill get back to you shortly!'}
      </Typography>
      <Button
        size="small"
        sx={{
          backgroundColor: (theme) => theme.palette.lines.light,
          color: 'white',
          textTransform: 'none',
          marginTop: '1rem',
        }}
        // onSubmit={handleSubmit}
        onClick={resetForm}
        // TODO add enter key event
      >
        send-new-message
      </Button>
    </>
  );
};

export default SuccessState;
