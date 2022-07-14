import Link from 'next/link';

import React from 'react';

import { useRouter } from 'next/router';

import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomIcon from '../components/common/CustomIcon';

const RootStyle = styled('div')(({ theme }) => ({
  width: '95%',
  position: 'relative',
  backgroundColor: theme.palette.primary.light,
  borderRadius: '0.5rem',
  // overflow: 'hidden',
  borderColor: 'white',
}));

// const styles = {
//   about: {},
// };

const navItems = [
  { name: '_hello', link: '/' },
  { name: '_about-me', link: '/about' },
  { name: '_projects', link: '/projects' },
];

const Navbar = ({ nav, toggleNav }) => {
  const path = useRouter().pathname;
  console.log('Navbar -> path', path);

  return (
    // <RootStyle>
    <Box
      sx={{
        // borderBottomWidth: '2px',
        // borderBottomColor: (theme) => theme.palette.lines,
        display: 'flex',
        direction: 'row',
        borderBottom: '2px solid #1E2D3D',
        // textAlign: 'center',
        // borderRadius: '40px',
      }}
    >
      <Typography
        sx={{
          width: {
            xs: '75%',
            md: '15%',
          },
          color: (theme) => theme.palette.secondary.main,
          borderRight: '2px solid #1E2D3D',
        }}
      >
        amina-ait
      </Typography>
      {/* Mobile nav */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <CustomIcon icon="charm:menu-hamburger" />
        <CustomIcon icon="codicon:chrome-close" />
      </Box>

      {/* Desktop nav */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <List component={Stack} direction="row">
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{
                borderRight: '2px solid #1E2D3D',
                cursor: 'pointer',
                '&:hover': {
                  borderBottom: '0px',
                  borderBottomColor: (theme) => theme.palette.accent.main,
                  borderBottomWidth: '4px',
                  borderBottomStyle: 'solid',
                  transitionDuration: '1000',
                },
              }}
            >
              <Link href={item.link} passHref={true}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
    // </RootStyle>
  );
};

export default Navbar;
