import React, { useState } from 'react'
import { AppBar, Badge, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';


const Header = ({ counterBag, setCounterBag, setCartState }) => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cartOption = () => {
    setCounterBag(0);
    setCartState({ right: true })
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#1d3557', minWidth: '100px' }} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Food International
          </Typography>
          <Button color="inherit">
            <LocalDiningOutlinedIcon />
          </Button>
          <Button onClick={cartOption} color="inherit">
            <Badge badgeContent={counterBag} max={9} color="primary">
              <LocalMallOutlinedIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Todo" />
        <Tab label="Entradas" />
        <Tab label="Juntes" />
        <Tab label="Platos" />
        <Tab label="Sushinis" />
        <Tab label="Bebidas" />
        <Tab label="Postres" />
      </Tabs>
    </Box>
  )
}

export default Header