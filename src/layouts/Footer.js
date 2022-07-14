import React from 'react';
import { Box } from '@mui/material';
import SocialButtons from '../groups/SocialButtons';

const Footer = ({ nav, toggleNav }) => {
  return (
    <Box
      sx={{
        // borderBottomWidth: '2px',
        // borderBottomColor: (theme) => theme.palette.lines,
        display: 'flex',
        direction: 'row',
        borderTop: '2px solid #1E2D3D',
        position: 'relative',
        // bottom: '-2px',
        width: '100%',
        bottom: '-80%', // ONLY SHOW WHEN MOBILE MENU IS ON
        // bottom: 0,
        // left: 0,
        // right: 0,
        // width: 'fit-content',
        // top: '0.5rem',
        // textAlign: 'center',
        // borderRadius: '40px',
      }}
    >
      <SocialButtons />
    </Box>
  );
};

export default Footer;
