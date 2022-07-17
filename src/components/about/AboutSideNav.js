import React from 'react';
import Dropdown from '../common/Dropdown';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import CustomIcon from '../common/CustomIcon';

const profItems = [
  {
    name: 'gazal',
    type: 'folder',
    children: [
      {
        name: 'software-developer',
        type: 'file',
      },
    ],
  },
  {
    name: 'dianurse',
    type: 'folder',
    children: [
      {
        name: 'backend-developer',
        type: 'file',
      },
      {
        name: 'backend-intern',
        type: 'file',
      },
    ],
  },
  {
    name: 'opensoft-solutions',
    type: 'folder',
    children: [
      {
        name: 'software-engineer-intern',
        type: 'file',
      },
    ],
  },
  {
    name: 'resume',
    type: 'file',
  },
];

const personalItems = [
  {
    name: 'education',
    type: 'folder',
    children: [
      {
        name: 'university',
        type: 'file',
      },
      {
        name: 'highschool',
        type: 'file',
      },
    ],
  },
  {
    name: 'interests',
    type: 'folder',
    children: [
      {
        name: 'robotics',
        type: 'file',
      },
    ],
  },
];

const navItems = [
  {
    text: 'professional-info',
    subItems: profItems,
  },
  { text: 'personal-info', subItems: personalItems },
];
console.log('navItems', navItems);

const AboutSideNav = () => {
  return (
    <>
      {navItems.map((item, i) => {
        return (
          <Dropdown key={i} text={item.text}>
            <List>
              {item.subItems.map((subItem, i) => {
                {
                  const listId = `checkbox-list-label-${subItem}`;
                  return (
                    <ListItem key={subItem.name} disablePadding>
                      <ListItemButton
                        role={undefined}
                        // onClick={handleToggle(stack)}
                        disableRipple
                      >
                        <ListItemText
                          id={listId}
                          primary={subItem.name}
                          sx={{
                            '&.active .MuiTypography-root': {
                              fontWeight: 'bold',
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                }
              })}
            </List>
          </Dropdown>
        );
      })}
    </>
  );
};

export default AboutSideNav;
