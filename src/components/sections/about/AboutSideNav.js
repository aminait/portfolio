import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Tooltip, Box } from '@mui/material';
import Dropdown from '../../common/Dropdown';
import CustomIcon from '../../common/CustomIcon';
import SecondaryDropdown from '../../common/SecondaryDropdown';
import { navItems } from '../../../content/aboutNavItems';
import { useResponsive } from '../../../hooks/useResponsive';

const AboutSideNav = ({ handleClickFile }) => {
  const { isDesktop } = useResponsive();
  return (
    <Box>
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
                            color: (theme) => `${theme.palette.accent[subItem.color]}`,
                          }}
                        />
                        {subItem.name}
                      </>
                    );
                    return (
                      <SecondaryDropdown key={i} text={text} isOpen={i === 0}>
                        {subItem.children.map((child) => (
                          <ListItem key={child.name} disablePadding>
                            <ListItemButton
                              role={undefined}
                              onClick={() => handleClickFile(child.name)}
                              disableRipple
                            >
                              <CustomIcon icon={'ri:file-info-line'} sx={{ marginRight: '5px' }} />

                              <ListItemText
                                id={listId}
                                primary={child.name}
                                sx={{
                                  '&.active .MuiTypography-root': {
                                    fontWeight: 'bold',
                                  },
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
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
    </Box>
  );
};

export default AboutSideNav;
