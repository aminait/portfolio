import React, { useState } from 'react';
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
import { useRouter } from 'next/router';

const MobileMenu = ({ toggleMenu }) => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  console.log('MobileMenu -> show', show);
  return show ? (
    <Stack direction="column" display="flex" justifyContent="space-between">
      <List disablePadding>
        {topNavItems.items.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            sx={{ borderBottom: '2px solid #1E2D3D' }}
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
              router.push(item.link);
            }}
          >
            <ListItemText
              id={item.name}
              primary={item.name}
              sx={{ margin: '1rem' }}
            />
          </ListItem>
          // </Link>
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
  ) : (
    ''
  );
};

export default MobileMenu;
