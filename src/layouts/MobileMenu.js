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
import { motion } from 'framer-motion';

const MobileMenu = ({ toggleMenu }) => {
  const router = useRouter();
  const [show, setShow] = useState(true);
  return show ? (
    <Stack direction="column" display="flex" justifyContent="space-between">
      <List disablePadding>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.5,
                staggerChildren: 0.08,
              },
            },
          }}
          style={{ listStyle: 'none', padding: 0 }}
        >
          {topNavItems.items.map((item) => (
            <motion.li
              key={item.name}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              exit={{ opacity: 0 }}
              style={{ borderBottom: '2px solid #1E2D3D' }}
            >
              <ListItem
                disablePadding
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
            </motion.li>
            // </Link>
          ))}
        </motion.ul>
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
