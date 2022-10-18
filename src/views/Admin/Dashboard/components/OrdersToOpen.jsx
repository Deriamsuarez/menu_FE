import { Stack, Typography, Divider } from '@mui/material'
import React from 'react'
import AlertOrderMain from './AlertOrderMain'

const OrdersToOpen = () => {
  return (
    <Stack sx={{width: 400, border: '0.3px solid gray', borderRadius: '0.5em', p: 2, px: 4, minWidth: 350, gap: 1}}>
        <Typography variant='h6'>Ordenes por abrir</Typography>
        <Divider />
        <AlertOrderMain/>
        <Divider />
    </Stack>
  )
}

export default OrdersToOpen