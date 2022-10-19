import { Stack, Box, Divider, Typography, Button } from '@mui/material'
import React from 'react'
import CustomerInfo from './CustomerInfo'
import OrderInfo from './OrderInfo'

const OrderDetails = () => {
    return (
        <Stack spacing={2} sx={{ flex: 1, backgroundColor: '#f8f8f7', borderRadius: '1em', p: '2em' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6' >Order #4356</Typography>
                <Box sx={{ p: '0.5em', borderRadius: '30px', backgroundColor: 'success.light', minWidth: 100, textAlign: 'center' }}>
                    <Typography variant='body' color='white'><strong>Active</strong></Typography>
                </Box>
            </Box>
            <Divider />
            <CustomerInfo />
            <OrderInfo />
            <Button variant='contained' color='error' >Cerrar cuenta</Button>

        </Stack>
    )
}

export default OrderDetails