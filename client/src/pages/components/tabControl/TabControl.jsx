import React from 'react'
//import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
//import './StretchyButton.css'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';

const TabControl = ({ icon, onChange, list, index }) => (
    <AppBar position="static" color="default">
        <Tabs
            value={index}
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
            onChange={onChange}
        >
            {list.map(l => <Tab label={l.name} icon={icon}/>)}

        </Tabs>
    </AppBar>
)

export default TabControl