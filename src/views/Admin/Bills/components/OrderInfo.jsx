import { Box, Stack, Typography, IconButton } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import React from 'react'
import OrderInfoTable from './OrderInfoTable';

const OrderInfo = () => {
    return (
        <Stack spacing={1}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='body'><strong>Order Info</strong></Typography>
                <IconButton color='success' >
                    <AddOutlinedIcon />
                </IconButton>
            </Box>
            <OrderInfoTable/>
        </Stack>
    )
}

export default OrderInfo