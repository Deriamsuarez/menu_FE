import React, { useState } from 'react'
import { AppBar, Badge, Button, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useNavigate } from 'react-router-dom';


const Header = ({ counterBag, setCounterBag, setCartState }) => {



  const cartOption = () => {
    setCounterBag(0);
    setCartState({ right: true })
  }

  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component='nav' sx={{ position:"fixed", top: 0, backgroundColor: 'warning.light', minWidth: '100px' }} >
        <Toolbar>
          <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
            Food International
          </Typography>
          <Button onClick={cartOption} color="inherit">
            <Badge badgeContent={0} max={9} color="primary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header