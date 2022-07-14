import React from 'react';
import { Icon, IconifyIcon } from '@iconify/react';
import { Box } from '@mui/material';

const CustomIcon = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
};
export default CustomIcon;
