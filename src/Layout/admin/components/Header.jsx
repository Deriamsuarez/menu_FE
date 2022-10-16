import React from 'react'
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = ({toggleDrawer}) => {

    const navigate = useNavigate()

    return (
        <AppBar position="fixed" sx={{ px: 1 }}>
            <Toolbar>
                <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" >
                    <MenuIcon />
                </IconButton>
                <Typography onClick={()=> navigate('/') } variant="h6" noWrap component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                   Food International
                </Typography>
            </Toolbar>
        </AppBar>

    )
}

export default Header