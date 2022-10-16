import { Stack, Box, Typography } from '@mui/material'
import React from 'react'

const CustomerInfo = () => {
    return (
        <Stack my={2} spacing={2}>
            <Typography variant='body'><strong>Details</strong></Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '1em', border: '3px dashed #e9ecef', borderRadius: '1em', p: 2, px: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="overline" color="initial">Table</Typography>
                    <Typography variant="body" color="initial"><strong>2B</strong></Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="overline" color="initial">Customer</Typography>
                    <Typography variant="body" color="initial"><strong>Alan Suarez</strong></Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="overline" color="initial">Waitress</Typography>
                    <Typography variant="body" color="initial"><strong>Deriam Suarez</strong></Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="overline" color="initial">Subtotal</Typography>
                    <Typography variant="body" color="initial"><strong>4,800.00</strong></Typography>
                </Box>
            </Box>
        </Stack>
    )
}

export default CustomerInfo