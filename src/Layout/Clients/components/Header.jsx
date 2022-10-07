import React, { useState } from 'react'
import { AppBar, Badge, Button, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import { useNavigate } from 'react-router-dom';


const Header = ({ counterBag, setCounterBag, setCartState }) => {



  const cartOption = () => {
    setCounterBag(0);
    setCartState({ right: true })
  }

  const navigate = useNavigate();


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component='nav' position="sticky" sx={{ backgroundColor: '#1d3557', minWidth: '100px' }} >
        <Toolbar>
          <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
            Food International
          </Typography>
          {/* <Button onClick={() => navigate('/orders')} color="inherit">
            <LocalDiningOutlinedIcon />
          </Button>
          <Button onClick={cartOption} color="inherit">
            <Badge badgeContent={counterBag} max={9} color="primary">
              <LocalMallOutlinedIcon />
            </Badge>
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header