import React from 'react';
import CustomIcon from '../components/common/CustomIcon';
import { Stack, Link, Tooltip, IconButton } from '@mui/material';

const SocialButtons = () => {
  const SOCIALS = [
    {
      icon: 'fa:linkedin',
      link: '#',
      name: 'LinkedIn ',
    },
    {
      icon: 'akar-icons:instagram-fill',
      link: '#',
      name: 'Instagram ',
    },
  ];
  return (
    <Stack direction="row" flexWrap="wrap" alignItems="center">
      {SOCIALS.map((social) => {
        const { name, icon, link } = social;
        return (
          <Link key={name} href={link}>
            <Tooltip title={name} placement="top">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    bgcolor: 'white',
                  },
                }}
              >
                <CustomIcon icon={icon} sx={{ width: 20, height: 20 }} />
              </IconButton>
            </Tooltip>
          </Link>
        );
      })}
    </Stack>
  );
};

export default SocialButtons;
