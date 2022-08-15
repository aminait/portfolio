import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import HorizontalBar from './HorizontalBar';
import { topNavItems, bottomNavItems } from '../content/navItems';
import MobileMenu from './MobileMenu';

const BgStyle = styled('main')(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  width: '100vw',
  height: '100vh',
}));
const MainStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.lighter,
  borderRadius: '0.5rem',
  borderColor: '#1E2D3D',
  borderStyle: 'solid',
  borderWidth: '2px',
  width: '95%',
  height: '95%',
  paddingBottom: '1rem',
}));

const MainView = styled('div')(({ theme }) => ({
  height: '87%',
  [theme.breakpoints.down('md')]: {
    overflow: 'scroll',
    paddingBottom: '1rem',
  },
}));

const MainLayout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  console.log('MainLayout -> menu', menu);

  const toggleMenu = () => {
    console.log('555555555555');
    setMenu((prev) => !prev);
    setCloseMenu((prev) => !prev);
  };

  // const toggleMenu = () => {
  //   toggleMenu();
  //   setCloseMenu((prev) => !prev);
  // };

  return (
    <BgStyle>
      <MainStyle>
        <HorizontalBar
          toggleMenu={toggleMenu}
          isTop={true}
          navItems={topNavItems}
          closeMenu={closeMenu}
          setCloseMenu={setCloseMenu}
        />
        <MainView>
          {menu ? <MobileMenu toggleMenu={toggleMenu} /> : children}
        </MainView>
        {/* <Footer /> */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <HorizontalBar
            toggleMenu={toggleMenu}
            isTop={false}
            navItems={bottomNavItems}
          />
        </Box>
      </MainStyle>
    </BgStyle>
  );
};

export default MainLayout;
