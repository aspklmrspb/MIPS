import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HiTrustMails from './HiTrustMails';
import Logs from './Logs';
import MailTemplates from './MailTemplates';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import './MoreMenu.css'; // Import the CSS file
function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}
export default function More() {
    return (
        <div style={{ marginTop: '5px', display: 'flex', minHeight: '620px' }} className='contentContr'>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', padding: '10px' }}>
                <div className={'more-menu'}>
                    <ul>
                        <li>
                            <Link to="/more/hitrust-mails" className={'active more-menu-tab'} >
                               Hitrust Emails
                            </Link>
                        </li>
                        <li>
                            <Link to="/more/cms-mail-remainder" className={'more-menu-tab'} >
                                CMS Submission Email Remainder
                            </Link>
                        </li>
                        <li>
                            <Link to="/more/logs" className={'more-menu-tab'} >
                                Logs
                            </Link>
                        </li>
                        <li>
                            <Link to="/more/performance-aggregation" className={'more-menu-tab'} >
                                Performance Aggregation
                            </Link>
                        </li>
                        <li>
                            <Link to="/more/encrypt-patientid" className={'more-menu-tab'} >
                                Encrypt Patient Id
                            </Link>
                        </li>
                        <li>
                            <Link to="/more/mail-templates" className={'more-menu-tab'} >
                                Email Templates
                            </Link>
                        </li>
                   </ul>
                </div>
                <div style={{ width: '90%', margin: '0px 10px' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}