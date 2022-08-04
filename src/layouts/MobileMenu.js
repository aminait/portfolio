import React from 'react';
import Link from 'next/link';
import HorizontalBar from './HorizontalBar';
import { topNavItems, bottomNavItems } from '../content/navItems';
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const MobileMenu = ({ setMenu }) => {
  return (
    <Grid
      container
      direction="column"
      display="flex"
      justifyContent="space-between"
    >
      <Grid item>
        <List disablePadding>
          {topNavItems.items.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              passHref={true}
              onClick={() => setMenu(false)}
            >
              <ListItem
                disablePadding
                sx={{ borderBottom: '2px solid #1E2D3D' }}
              >
                <ListItemText
                  id={item.name}
                  primary={item.name}
                  sx={{ margin: '1rem' }}
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Grid>
      {/* TODO Add footer */}
    </Grid>
  );
};

export default MobileMenu;
