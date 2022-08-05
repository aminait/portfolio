import React from 'react';
import Link from '../components/common/Link';
import HorizontalBar from './HorizontalBar';
import { topNavItems, bottomNavItems } from '../content/navItems';
import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const MobileMenu = ({ setMenu }) => {
  return (
    <Stack direction="column" display="flex" justifyContent="space-between">
      <List disablePadding>
        {topNavItems.items.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            passHref={true}
            onClick={() => setMenu(false)}
          >
            <ListItem disablePadding sx={{ borderBottom: '2px solid #1E2D3D' }}>
              <ListItemText
                id={item.name}
                primary={item.name}
                sx={{ margin: '1rem' }}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      {/* TODO Add footer */}
      {/* <Link
        href={'#'}
        passHref={true}
        onClick={() => setMenu(false)}
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: 60,
          textAlign: 'center',
        }}
      >
        <ListItem disablePadding sx={{ borderBottom: '2px solid #1E2D3D' }}>
          <ListItemText primary={'f'} sx={{ margin: '1rem' }} />
        </ListItem>
      </Link> */}
    </Stack>
  );
};

export default MobileMenu;
