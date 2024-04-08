import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
  // display: 'flex', // Use flex layout
  // flexDirection: 'column', // Stack children vertically
  // justifyContent: 'space-between', // Space between top and bottom elements
  position: 'relative', // Set position relative for absolute child positioning
}));

const BottomBarContainer = styled(Box)(({ theme }) => ({
  position: 'absolute', // Position the bottom bar absolutely
  bottom: 0, // Anchor to the bottom
  left: 0,
  right: 0,
  display: { xs: 'none', md: 'block' }, // Only show on md breakpoint and up
}));

const MainView = styled('div')(({ theme }) => ({
  height: '86.5%',
  [theme.breakpoints.down('md')]: {
    overflow: 'scroll',
    paddingBottom: '1rem',
  },
}));

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.2,
};

const menuVariants = {
  open: {
    transform: 'translateX(0%)',
  },
  closed: {
    transform: 'translateX(100%)',
  },
};

const MainLayout = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  const ContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    // height: `calc(100vh - ${footerHeight})`,
    // height: '100%',
    overflow: 'hidden',
  });

  const SidebarAndMainSection = styled('div')({
    flexGrow: 1,
    display: 'flex',
    overflow: 'auto', // Add scroll to the main content area if content overflows
  });

  const toggleMenu = () => {
    setMenu((prev) => !prev);
    setCloseMenu((prev) => !prev);
  };

  // const toggleMenu = () => {
  //   toggleMenu();
  //   setCloseMenu((prev) => !prev);
  // };

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.clientHeight);
    }
  }, []);

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
        <MainView>{menu ? <MobileMenu toggleMenu={toggleMenu} /> : <>{children}</>}</MainView>
        {/* <Footer /> */}
        <BottomBarContainer ref={footerRef}>
          <HorizontalBar toggleMenu={toggleMenu} isTop={false} navItems={bottomNavItems} />
        </BottomBarContainer>
      </MainStyle>
    </BgStyle>
  );
};

export default MainLayout;
