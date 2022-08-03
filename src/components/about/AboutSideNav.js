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
import SecondaryDropdown from '../common/SecondaryDropdown';

const profItems = [
  {
    name: 'gazal',
    type: 'folder',
    color: 'green',
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
    color: 'pink',
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
    color: 'orange',
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
    color: 'main',
    children: [
      {
        name: 'university',
        type: 'file',
        color: 'main',
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
    color: 'green',
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
    isOpen: true,
  },
  { text: 'personal-info', subItems: personalItems, isOpen: false },
];
console.log('navItems', navItems);

const AboutSideNav = ({ handleClickFile }) => {
  return (
    <>
      {navItems.map((item, i) => {
        return (
          <Dropdown key={i} text={item.text} isOpen={item.isOpen}>
            <List>
              {item.subItems.map((subItem, i) => {
                {
                  const listId = `checkbox-list-label-${subItem}`;

                  if (subItem.type === 'folder') {
                    const text = (
                      <>
                        <CustomIcon
                          icon={'ri:folder-3-fill'}
                          sx={{
                            marginRight: '5px',
                            color: (theme) =>
                              `${theme.palette.accent[subItem.color]}`,
                          }}
                        />
                        {subItem.name}
                      </>
                    );
                    return (
                      <SecondaryDropdown key={i} text={text}>
                        <ListItem key={subItem.name} disablePadding>
                          <ListItemButton
                            role={undefined}
                            onClick={() => handleClickFile(subItem.name)}
                            disableRipple
                          >
                            <CustomIcon
                              icon={'ri:file-info-line'}
                              sx={{ marginRight: '5px' }}
                            />

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
                      </SecondaryDropdown>
                    );
                  }
                  return (
                    <ListItem key={subItem.name} disablePadding>
                      <ListItemButton
                        role={undefined}
                        onClick={() => handleClickFile(subItem.name)}
                        disableRipple
                      >
                        <CustomIcon
                          icon={'ri:file-info-line'}
                          sx={{ marginLeft: '20px', marginRight: '5px' }}
                        />
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
