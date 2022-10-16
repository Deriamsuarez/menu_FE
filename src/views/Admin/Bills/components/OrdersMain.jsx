import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import OrderDetails from './OrderDetails'
import OrderInfo from './OrderInfo'
import OrderResume from './OrderResume'
import SearchBills from './SearchBills'

const OrdersMain = () => {
    return (
        <Stack  sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2em', overflowY: 'scroll' }}>
            <Box>
                <Box sx={{ px: '0.5em' }}>
                    <SearchBills />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em', maxHeight: '80vh', overflowY: 'scroll', px: '0.5em', pb: '0.5em' }}>
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                    <OrderResume />
                </Box>
            </Box>
            <OrderDetails />
        </Stack>
    )
}

export default OrdersMain