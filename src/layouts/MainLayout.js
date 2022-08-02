import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import HorizontalBar from './HorizontalBar';

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
  width: '98%',
  height: '95%',
}));

const MainView = styled('div')(({ theme }) => ({
  height: '87%',
}));

const topNavItems = {
  main: {
    name: 'amina-ait',
    link: '/',
  },
  items: [
    { name: '_hello', link: '/' },
    { name: '_about-me', link: '/about' },
    { name: '_projects', link: '/projects' },
  ],
  rightNavItem: { name: 'contact-me', link: '/contact' },
};

const bottomNavItems = {
  main: { name: 'Find me on:', link: '' },
  items: [
    { icon: 'fa:linkedin', link: '#', name: 'LinkedIn' },
    { icon: 'akar-icons:instagram-fill', link: '#', name: 'Instagram' },
    {
      icon: 'ant-design:github-outlined',
      name: '@aminait',
      link: '/contact',
    },
  ],
};

const MainLayout = ({ children }) => {
  const [nav, toggleNav] = useState(false);
  return (
    <BgStyle>
      <MainStyle>
        <HorizontalBar
          nav={nav}
          toggleNav={toggleNav}
          isTop={true}
          navItems={topNavItems}
        />
        <MainView>{children}</MainView>
        {/* <Footer /> */}
        <HorizontalBar
          nav={nav}
          toggleNav={toggleNav}
          isTop={false}
          navItems={bottomNavItems}
        />
      </MainStyle>
    </BgStyle>
  );
};

export default MainLayout;
