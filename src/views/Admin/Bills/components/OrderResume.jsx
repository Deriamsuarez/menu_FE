import { Stack, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const OrderResume = () => {
    return (
        <Stack sx={{ border: '0.5px solid gray', padding: '1em', minWidth: '270px', maxWidth: '350px', borderRadius: '0.5em', boxShadow: ' .25rem .25rem 0 rgba(0,0,0,.1)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                    <Typography variant='body'><strong>Orden #4563</strong> </Typography>
                    <Box sx={{ width: '8px', height: '8px', borderRadius: '100%', backgroundColor: 'green' }} />
                    <Typography variant='body2'>Active</Typography>
                </Box>
                <Typography variant='h6' color='success.main'>$4,700</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                    <Typography variant='body2'>Mesa <strong>#2</strong></Typography>
                    <Divider sx={{ width: '0.3em' }} />
                    <Typography variant='body2'>Deriam Suarez</Typography>
                </Box>
                <Typography variant='body2'>14:25 AM</Typography>
            </Box>
        </Stack>

    )
}

export default OrderResume