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
  Tooltip,
} from '@mui/material';
import CustomIcon from '../components/common/CustomIcon';
import { Grid } from '@mui/material';

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

const HorizontalBar = ({ nav, toggleNav, isTop, navItems, rightNavItem }) => {
  const path = useRouter().pathname;
  const [closeMenu, setCloseMenu] = useState(false);

  const toggleMenu = () => {
    setCloseMenu((prev) => !prev);
    toggleNav((prev) => !prev);
  };

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        direction: 'row',
        ...(isTop && { borderBottom: '2px solid #1E2D3D' }),
        ...(!isTop && { borderTop: '2px solid #1E2D3D' }),
      }}
    >
      <Grid
        item
        justifyContent="start"
        sx={{
          width: {
            xs: '75%',
            md: '12%',
          },
          color: (theme) => theme.palette.secondary.main,
          cursor: 'pointer',
        }}
      >
        {navItems.main.link ? (
          <Link href={navItems.main.link} passHref={true}>
            <Typography sx={{ textAlign: 'center', margin: '1rem' }}>
              {navItems.main.name}
            </Typography>
          </Link>
        ) : (
          <Typography
            sx={{ textAlign: 'center', margin: '1rem', cursor: 'default' }}
          >
            {navItems.main.name}
          </Typography>
        )}
      </Grid>
      {/* Mobile nav */}
      <Grid
        item
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
      </Grid>

      {/* Desktop nav */}
      <Grid
        item
        sx={{
          display: { xs: 'none', md: 'flex' },
          whiteSpace: 'nowrap',
        }}
      >
        <List
          component={Stack}
          direction="row"
          sx={{ padding: 0, width: '100%' }}
        >
          {navItems.items.map((item, i) => (
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
                {item.icon ? (
                  <Tooltip title={item.name} placement="top">
                    <CustomIcon
                      icon={item.icon}
                      sx={{
                        width: 15,
                        height: 15,
                        color: (theme) => theme.palette.secondary.main,
                        '&:hover': {
                          color: 'white',
                        },
                        margin: '1rem',
                        lineHeight: '1rem',
                      }}
                    />
                  </Tooltip>
                ) : (
                  <ListItemText
                    primary={item.name}
                    sx={{
                      textAlign: 'center',
                      margin: '1rem',
                      lineHeight: '1rem',
                    }}
                  />
                )}
              </Link>
            </ListItem>
          ))}

          {navItems.rightNavItem && (
            <ListItem
              disablePadding
              sx={{
                ...listItemStyles,
                ...(path === navItems.rightNavItem.link && activeStyles),
                borderLeft: '2px solid #1E2D3D',
                marginLeft: 'calc(52vw + 4rem)',
              }}
            >
              <Link href={navItems.rightNavItem.link} passHref={true}>
                <ListItemText
                  primary={navItems.rightNavItem.name}
                  sx={{
                    textAlign: 'center',
                    margin: '1rem',
                  }}
                />
              </Link>
            </ListItem>
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default HorizontalBar;
