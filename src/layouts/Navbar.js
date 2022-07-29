import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import CustomIcon from '../components/common/CustomIcon';

const navItems = [
  { name: '_hello', link: '/', align: 'left' },
  { name: '_about-me', link: '/about', align: 'left' },
  { name: '_projects', link: '/projects', align: 'left' },
];

const activeStyles = {
  borderBottom: '0px',
  borderBottomColor: (theme) => theme.palette.accent.main,
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  transitionDuration: '150ms',
};
const listItemStyles = {
  cursor: 'pointer',
  height: '100%',
  borderBottom: '0px',
  borderBottomColor: (theme) => theme.palette.primary.lighter,
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  '&:hover': {
    ...activeStyles,
  },
};

const Navbar = ({ nav, toggleNav }) => {
  const path = useRouter().pathname;
  const [closeMenu, setCloseMenu] = useState(false);

  const toggleMenu = () => {
    setCloseMenu((prev) => !prev);
    toggleNav((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        direction: 'row',
        borderBottom: '2px solid #1E2D3D',
      }}
    >
      <Link href={'/'} passHref={true}>
        <Box
          sx={{
            width: {
              xs: '75%',
              md: '12%',
            },
            color: (theme) => theme.palette.secondary.main,
            cursor: 'pointer',
          }}
        >
          <Typography sx={{ textAlign: 'center', margin: '1rem' }}>
            amina-ait
          </Typography>
        </Box>
      </Link>
      {/* Mobile nav */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          marginRight: '1rem',
          fontSize: '25px',
        }}
      >
        {closeMenu ? (
          <CustomIcon
            icon="codicon:chrome-close"
            sx={{ color: '#607B96' }}
            onClick={toggleMenu}
          />
        ) : (
          <CustomIcon
            icon={'charm:menu-hamburger'}
            sx={{ color: '#607B96' }}
            onClick={toggleMenu}
          />
        )}
      </Box>

      {/* Desktop nav */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          whiteSpace: 'nowrap',
        }}
      >
        <List component={Stack} direction="row" sx={{ padding: 0 }}>
          {navItems.map((item, i) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{
                ...listItemStyles,
                ...(i === 0 && { borderLeft: '2px solid #1E2D3D' }),
                ...(path === item.link && activeStyles),
                borderRight: '2px solid #1E2D3D',
              }}
            >
              <Link href={item.link} passHref={true}>
                <ListItemText
                  primary={item.name}
                  sx={{
                    textAlign: 'center',
                    margin: '1rem',
                    lineHeight: '1rem',
                  }}
                />
              </Link>
            </ListItem>
          ))}

          <ListItem
            disablePadding
            sx={{
              ...listItemStyles,
              ...(path === '/contact' && activeStyles),
              marginLeft: '55vw',
              borderLeft: '2px solid #1E2D3D',
            }}
          >
            <Link href={'contact'} passHref={true}>
              <ListItemText
                primary="contact-me"
                sx={{
                  textAlign: 'center',
                  margin: '1rem',
                }}
              />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
