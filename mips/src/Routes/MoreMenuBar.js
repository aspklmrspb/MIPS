import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Popover, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './MenuBar.css'; // Import the CSS file
import { maxWidth } from '@mui/system';

export const MoreMenuBar = () => {
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
        <div className="menu-bar side-menu" style={{ width: "15%",height:'100%',background:'#005788' }}>
            <Tabs
                value={location.pathname}
                orientation="vertical"
                sx={{ width: '100%' }}
            >
                <Tab
                    label="Email Templates"
                    component={Link}
                    to="/more/mail-templates" // Update the value to match the nested route
                    value="/more/mail-templates" // Update the value to match the nested route
                    selected={isActiveTab('/more/mail-templates')} // Update the value to match the nested route
                />
                <Tab
                    label="Hitrust Emails"
                    component={Link}
                    to="/more/hitrust-emails" // Update the value to match the nested route
                    value="/more/hitrust-emails" // Update the value to match the nested route
                    selected={isActiveTab('/more/hitrust-emails')} // Update the value to match the nested route
                />
                <Tab
                    label="Logs"
                    component={Link}
                    to="/more/logs" // Update the value to match the nested route
                    value="/more/logs" // Update the value to match the nested route
                    selected={isActiveTab('/more/logs')} // Update the value to match the nested route
                />
            </Tabs>
        </div>
    );
};

export default MoreMenuBar;