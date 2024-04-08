import React, { useEffect } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  InputLabel,
  CssBaseline,
  Button,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// TODO - add active styles
// TODO - Add validation

const StyledInputLabel = styled((props) => <InputLabel shrink {...props} color="secondary" />)(
  ({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 450,
    fontSize: '20px',
  })
);

const StyledTextField = styled((props) => <TextField variant="outlined" {...props} fullWidth />)(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    '& .MuiOutlinedInput-root': {
      borderRadius: '0.5rem',
      border: `1px solid ${theme.palette.lines.light}`,
      '& input': {
        // color: theme.palette.secondary.main,
        color: 'white',
      },
      '& textarea': {
        // color: theme.palette.secondary.main,
        color: 'white',
      },
      '& fieldset': {
        transition: 'border-color 0.2s', // Optional: adds transition for border color change
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.lines.main, // Color for border when TextField is focused
        borderWidth: '1px', // Increased border width when focused
      },
    },
    marginBottom: '1.5rem',
    fontSize: 14,
  })
);

const ContactForm = ({ handleChange, handleSubmit, loading }) => {
  // useEffect(() => {
  //   setValues((prevValues) => ({ ...prevValues, email: 'Jonahatham' }));
  // });
  //   setValues((prevValues) => ({ ...prevValues, email: 'Jonahatham' }));
  return (
    <div>
      {/* <CssBaseline /> */}
      <StyledInputLabel>_name:</StyledInputLabel>
      {/* <FormControl variant="standard"> */}
      <StyledTextField id="name-input" name="name" onChange={(e) => handleChange(e)} />
      {/* </FormControl> */}
      <StyledInputLabel>_email:</StyledInputLabel>
      {/* <FormControl variant="standard"> */}
      <StyledTextField
        id="email-input"
        name="email"
        onChange={(e) => handleChange(e)}
        type="email"
      />
      {/* </FormControl> */}
      <StyledInputLabel>_message:</StyledInputLabel>
      {/* <FormControl variant="standard"> */}
      <StyledTextField
        id="message-input"
        multiline
        rows={4}
        name="message"
        onChange={(e) => handleChange(e)}
      />
      {/* </FormControl> */}
      <Button
        size="small"
        sx={{
          backgroundColor: (theme) => theme.palette.lines.light,
          color: 'white',
          textTransform: 'none',
          paddingX: '15px',
          paddingY: '7px',
          fontSize: 14,
        }}
        // onSubmit={handleSubmit}
        onClick={handleSubmit}
        disabled={loading}
        // TODO add enter key event
      >
        {loading ? <CircularProgress size="sm" /> : 'submit-message'}
      </Button>
    </div>
  );
};

export default ContactForm;
