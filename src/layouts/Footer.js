import React from 'react';
import { Box } from '@mui/material';
import CustomIcon from '../components/common/CustomIcon';
import {
  Stack,
  Link,
  Tooltip,
  IconButtonTypeMap,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Footer = ({ nav, toggleNav }) => {
  const SOCIALS = [
    {
      icon: 'fa:linkedin',
      link: '#',
      name: 'LinkedIn ',
    },
    {
      icon: 'akar-icons:instagram-fill',
      link: '#',
      name: 'Instagram',
    },
    // {
    //   icon: 'ant-design:github-outlined',
    //   link: '#',
    //   name: 'Github',
    // },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        direction: 'row',
        borderTop: '2px solid #1E2D3D',
        // position: 'relative',
        // bottom: '-2px',
        // width: '100%',
        // bottom: '-80%', // ONLY SHOW WHEN MOBILE MENU IS ON
      }}
    >
      {/* <Stack direction="row" flexWrap="wrap" alignItems="center"> */}
      <List
        component={Stack}
        direction="row"
        sx={{
          color: (theme) => theme.palette.secondary.main,
          whiteSpace: 'nowrap',
        }}
      >
        <ListItem sx={{ borderRight: '2px solid #1E2D3D' }}>
          Find me on:
        </ListItem>
        {SOCIALS.map((item) => (
          <ListItem
            key={item.name}
            // disablePadding
            sx={{
              borderRight: '2px solid #1E2D3D',
              cursor: 'pointer',

              '&:hover': {
                borderBottom: '0px',
                borderBottomColor: (theme) => theme.palette.accent.main,
                borderBottomWidth: '4px',
                borderBottomStyle: 'solid',
                transitionDuration: '1000',
              },
            }}
          >
            <Link href={item.link} passHref={true}>
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
                  }}
                />
              </Tooltip>
            </Link>
          </ListItem>
        ))}
      </List>
      <ListItem sx={{ borderRight: '2px solid #1E2D3D' }}>
        <p>@aminait</p>
        <Link href="#" passHref={true}>
          <Tooltip title="GitHub" placement="top">
            <CustomIcon
              icon="ant-design:github-outlined"
              sx={{
                width: 15,
                height: 15,
                color: (theme) => theme.palette.secondary.main,
                '&:hover': {
                  color: 'white',
                },
              }}
            />
          </Tooltip>
        </Link>
      </ListItem>
      {/* </Stack> */}
    </Box>
  );
};

export default Footer;
