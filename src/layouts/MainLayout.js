import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

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
  height: '88%',
}));

const MainLayout = ({ children }) => {
  const [nav, toggleNav] = useState(false);
  return (
    <BgStyle>
      <MainStyle>
        <Navbar nav={nav} toggleNav={toggleNav} />
        <MainView>{children}</MainView>
        <Footer />
      </MainStyle>
    </BgStyle>
  );
};

export default MainLayout;
