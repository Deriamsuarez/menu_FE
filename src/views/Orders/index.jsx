import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const index = () => {
    return (
        <Stack
            p={4}
            direction='row'
            flexWrap='wrap'
            gap='56.5px'
            justifyContent='center'
            alignContent='flex-end'
            alignItems='flex-start'
        >

            <Stack
                position='relative'
                overflow='hidden'
                sx={{
                    maxWidth: '400px',
                    width: '100%',
                    border: '0.5px solid gray',
                    borderRadius: '0.5em',
                    boxShadow: 2
                }}>
                <Box
                    p={2}
                    sx={{
                        width: '100%',
                        backgroundColor: '#1d3557',
                        boxShadow: '',
                        textAlign: 'center'
                    }}
                >
                    <Typography variant='h5' color='white'>
                        Orden <strong>#113O45</strong>
                    </Typography>
                    <Typography variant='body2' color='white'>
                        Nov 11, 2021, 06:45PM
                    </Typography>
                </Box>
                <Stack px='2em' py='1em' spacing={2}>
                    <Stack spacing={1} alignItems='center'>
                        <Stack width='100%' display='flex' direction='row' justifyContent='space-between'>
                            <Typography>Tiempo de preparacion</Typography>
                            <Typography><strong>25 Min</strong></Typography>
                        </Stack>
                        <Divider />
                        <Stack width='100%' display='flex' direction='row' justifyContent='space-between'>
                            <Typography>Cantidad de platos</Typography>
                            <Typography><strong>4</strong></Typography>
                        </Stack>
                    </Stack>
                    <Divider/>
                    <Stack width='100%' display='flex' direction='row' justifyContent='center'>
                            <Typography variant='h6'>Order Details</Typography>

                        </Stack>
                   

                </Stack>
            </Stack>
        </Stack>

    )
}

export default index