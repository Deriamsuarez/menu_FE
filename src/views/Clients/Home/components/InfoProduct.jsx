import React, { useState } from 'react';
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
import { Skeleton } from '@mui/material';

const InfoProduct = ({ stateInfoProduct, setStateInfoProduct, toggleDrawer, product, addProduct }) => {

  console.log(stateInfoProduct)
  return (
    <Stack sx={{ backgroundColor: 'yellow', borderRadius: '20px', overflow: 'hidden' }}>

      <SwipeableDrawer
        anchor={'bottom'}
        open={stateInfoProduct['bottom']}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}
        PaperProps={{ square: false, style: { borderTopLeftRadius: '1em', borderTopRightRadius: '1em' } }}
      >
        {product && <MoreInfo product={product} addProduct={addProduct} />}


      </SwipeableDrawer>
    </Stack>
  )
}

export default InfoProduct