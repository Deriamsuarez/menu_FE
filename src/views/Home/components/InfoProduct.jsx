import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/system';
import MoreInfo from './MoreInfo';

const InfoProduct = ({stateInfoProduct, setStateInfoProduct} ) => {
console.log(stateInfoProduct)
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setStateInfoProduct({ bottom: stateInfoProduct, [anchor]: open });
        console.log(stateInfoProduct)
      };
    
  

  return (
    <Stack sx={{ backgroundColor: 'yellow', borderRadius: '20px', overflow: 'hidden' }}>

        <Button onClick={toggleDrawer('bottom', true)}>{'bottom'}</Button>
        <Stack sx={{ backgroundColor: 'yellow', borderRadius: '20px', overflow: 'hidden' }}>
        <SwipeableDrawer
          anchor={'bottom'}
          open={stateInfoProduct['bottom']}
          onClose={toggleDrawer('bottom', false)}
          onOpen={toggleDrawer('bottom', true)}
          PaperProps={{ square: false, style: { borderTopLeftRadius: '1em', borderTopRightRadius: '1em' } }}
          >
          <MoreInfo/>
        </SwipeableDrawer>
            </Stack>
  </Stack>
  )
}

export default InfoProduct