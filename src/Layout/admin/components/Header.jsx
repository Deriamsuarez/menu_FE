import React from 'react'
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({toggleDrawer}) => {
    return (
        <AppBar position="fixed" color="primary" sx={{ px: 1 }}>
            <Toolbar>
                <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                   Food International
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Header