import React from 'react';
import { Typography } from '@mui/material';
const EmptyState = () => {
  const lines = ['/**', '* No editor open', '*/'];
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
