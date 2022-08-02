import React from 'react';
import { Typography } from '@mui/material';

const defaultLines = ['/**', '* No editor open', '*/'];
const EmptyState = ({ lines = defaultLines }) => {
  return lines.map((line, index) => (
    <Typography
      key={index}
      sx={{ color: (theme) => theme.palette.secondary.main }}
    >
      <span>{`${index + 1}.`}</span> {line}
    </Typography>
  ));
};

export default EmptyState;
