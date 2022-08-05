import React, { useRef, useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

export function useResponsive() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

  //   const isMounted = useRef(true);
  //   useEffect(() => {
  //     isMounted.current = true;

  //     isMobile ? setRc(mobileContent) : setRc(webContent);

  //     // unbinding on unmount
  //     return () => {
  //       isMounted.current = false;
  //     };
  //   }, [isMobile]);

  return { isMobile, isDesktop };
}
