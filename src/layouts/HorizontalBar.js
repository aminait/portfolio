import React, { useState, useEffect } from 'react';
import Link from '../components/common/Link';
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
import { useResponsive } from '../hooks/useResponsive';
import { Grid } from '@mui/material';
import { topNavItems, bottomNavItems } from '../content/navItems';
import { AnimatePresence, motion } from 'framer-motion';

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

const HorizontalBar = ({ closeMenu, toggleMenu, isTop, navItems }) => {
  const path = useRouter().pathname;

  const { isMobile } = useResponsive();

  // const toggleMenu = () => {
  //   toggleMenu();
  //   setCloseMenu((prev) => !prev);
  // };

  // useEffect(() => {
  //   toggleMenu();
  //   setCloseMenu(false);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [path]);

  useEffect(() => {
    console.log('enterrrr');
  }, []);

  return (
    <>
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
              <Typography sx={{ textAlign: 'left', margin: '1rem' }}>
                {navItems.main.name}
              </Typography>
            </Link>
          ) : (
            <Typography
              sx={{
                textAlign: 'left',
                margin: '1rem',
                cursor: 'default',
              }}
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
            // width: '100%',
            marginRight: '1rem',
            marginLeft: 'auto',
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
            <>
              {path === '/' && (
                <>
                  <AnimatePresence key="mobile-menu-animation">
                    <motion.div
                      onClick={toggleMenu}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 0.2, scale: 1.5 }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'white',
                        position: 'absolute',
                        right: '20px',
                      }}
                    />
                  </AnimatePresence>
                </>
              )}
              <CustomIcon
                icon={'charm:menu-hamburger'}
                sx={{ color: '#607B96' }}
                onClick={toggleMenu}
              />
            </>
          )}
        </Grid>
        {/* Mobile selected nav */}

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
              <Link key={item.name} href={item.link} passHref={true}>
                <ListItem
                  disablePadding
                  sx={{
                    ...listItemStyles,
                    ...(i === 0 && { borderLeft: '2px solid #1E2D3D' }),
                    ...(path === item.link && activeStyles),
                    borderRight: '2px solid #1E2D3D',
                    ...(item.alignRight && {
                      marginLeft: 'calc(52vw + 4rem)',
                      borderLeft: '2px solid #1E2D3D',
                      borderRight: '0',
                    }),
                  }}
                >
                  {item.icon ? (
                    // <Tooltip title={item.name} placement="top">
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
                  ) : (
                    // </Tooltip>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        textAlign: 'center',
                        margin: '1rem',
                        lineHeight: '1rem',
                      }}
                    />
                  )}
                </ListItem>
              </Link>
            ))}
          </List>
        </Grid>
      </Grid>
      {isMobile && path !== '/' && !closeMenu && (
        <Grid
          sx={{
            display: { xs: 'flex', md: 'none' },
            borderBottom: '2px solid #1E2D3D',
          }}
        >
          <Typography sx={{ margin: '1rem' }}>
            {`${topNavItems.items.find((item) => item.link === path).name}`}
          </Typography>
        </Grid>
      )}
      {/* {isMobile && path !== '/' && (
        <List
          component={Stack}
          direction="row"
          sx={{
            bottom: '10px',
            margin: '5px',
            position: 'absolute',
            paddingTop: '5rem',
            // borderTop: '2px solid #1E2D3D',
            // width: '100%',
          }}
        >
          {bottomNavItems.items.map((item, i) => (
            <ListItem
              key={item.name}
              disablePadding
              // sx={{
              //   borderRight: '2px solid #1E2D3D',
              // }}
            >
              <Link href={item.link} passHref={true}>
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
              </Link>
            </ListItem>
          ))}
        </List>
      )} */}
    </>
  );
};

export default HorizontalBar;
