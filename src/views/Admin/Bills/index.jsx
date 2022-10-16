import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import OrdersMain from './components/OrdersMain'

const Bills = () => {
    return (
        <Stack spacing={4} >
            <Typography variant='h4'><strong>Ordenes</strong></Typography>
            <OrdersMain />
        </Stack>
    )
}

export default Bills