import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Popover, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './MenuBar.css'; // Import the CSS file

const MenuBar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActiveTab = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div className="menu-bar">
      <Tabs value={location.pathname}>
        <Tab
          label="Home"
          component={Link}
          to="/"
          value="/"
          selected={isActiveTab('/')}
        />
        <Tab
          label="Recorde Entered"
          component={Link}
          to="/records-entered"
          value="/records-entered"
          selected={isActiveTab('/records-entered')}
        />
        <Tab
          label="Services"
          component={Link}
          to="/services"
          value="/services"
          selected={isActiveTab('/services')}
        />
        <Tab
          label="Contact"
          component={Link}
          to="/contact"
          value="/contact"
          selected={isActiveTab('/contact')}
        />
      </Tabs>
      <div className="popover-container">
        <ListItem button onClick={handleClick}>
          <ListItemText primary="username: " />
          <ListItemIcon>
            <KeyboardArrowDownIcon />
          </ListItemIcon>
        </ListItem>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
            <ListItem component={Link} to="/page2">
              <ListItemText primary="Page 2" />
            </ListItem>
            <ListItem component={Link} to="/page3">
              <ListItemText primary="Page 3" />
            </ListItem>
          </List>
        </Popover>
      </div>
    </div>
  );
};

export default MenuBar;
