import { Stack, Typography } from '@mui/material'
import React from 'react'
import Resume from './components/Resume'
import Table from './components/Table'

const Dashboard = () => {
  return (
    <Stack spacing={2}>
        <Typography variant='h4'><strong>Dashboard</strong></Typography>
        <Resume/>
        <Table/>
    </Stack>
  )
}

export default Dashboard