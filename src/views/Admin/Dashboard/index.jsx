import { Stack, Typography } from '@mui/material'
import React from 'react'
import OrdersToOpen from './components/OrdersToOpen'
import Resume from './components/Resume'
import Table from './components/Table'

const Dashboard = () => {
  return (
    <Stack spacing={4}>
        <Typography variant='h4'><strong>Dashboard</strong></Typography>
        <Resume/>
        <Stack  sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1em'}}>
        <Table/>
<OrdersToOpen/>
        </Stack>
    </Stack>
  )
}

export default Dashboard