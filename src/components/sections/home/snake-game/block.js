import React from 'react';
import { Box } from '@mui/material';

const Block = ({ sx }) => {
  return (
    <Box
      component="span"
      sx={{
        zIndex: 10,
        position: 'absolute',
        width: '2%',
        height: '2%',
        ...sx,
      }}
    ></Box>
  );
};

export default Block;
