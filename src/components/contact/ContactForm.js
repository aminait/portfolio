import React, { useEffect } from 'react';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  InputLabel,
  CssBaseline,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// TODO - add active styles
// TODO - Add validation

const StyledInputLabel = styled((props) => (
  <InputLabel shrink {...props} color="secondary" />
))(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 450,
  fontSize: '20px',
}));

const StyledTextField = styled((props) => (
  <TextField variant="outlined" {...props} fullWidth />
))(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  border: `1px solid ${theme.palette.lines.light}`,
  borderRadius: '0.5rem',
  input: { color: theme.palette.secondary.main },
  textarea: { color: theme.palette.secondary.main },
  marginBottom: '1.5rem',
}));

const ContactForm = ({ handleChange }) => {
  // useEffect(() => {
  //   setValues((prevValues) => ({ ...prevValues, email: 'Jonahatham' }));
  // });
  //   setValues((prevValues) => ({ ...prevValues, email: 'Jonahatham' }));
  return (
    <div>
      {/* <CssBaseline /> */}
      <StyledInputLabel>_name:</StyledInputLabel>
      {/* <FormControl variant="standard"> */}
      <StyledTextField
        id="name-input"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      {/* </FormControl> */}
      <StyledInputLabel>_email:</StyledInputLabel>
      {/* <FormControl variant="standard"> */}
      <StyledTextField
        id="email-input"
        name="email"
        onChange={(e) => handleChange(e)}
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
        }}
      >
        submit-message
      </Button>
    </div>
  );
};

export default ContactForm;
