import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import React from 'react'
import Test from '../Home/components/Test';

const index = () => {

    const list = () => (
        <Stack>
            <Box>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Sushi pollo" secondary="$1,000 × 3" />
                        <Typography variant='body1' color='success.main'><strong>$3,000</strong></Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Hamburguesa" secondary="$450 × 2 " />
                        <Typography variant='body1' color='success.main'><strong>$900</strong></Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Pina Colada" secondary="$700 × 2" />
                        <Typography variant='body1' color='success.main'><strong>$1,400</strong></Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Hamburguesa" secondary="$450 × 2" />
                        <Typography variant='body1' color='success.main'><strong>$900</strong></Typography>
                    </ListItem>
                </List>
            </Box>
            <Stack px='2em' sx={{ gap: '1em' }}>
                <Divider />
                <Button variant='outlined' color='success' sx={{ width: '235px' }}>Solicitar Cuenta</Button>
            </Stack>
        </Stack>
    );


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
            <Test/>
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
                        Orden <strong>#1</strong>
                    </Typography>
                    <Typography variant='body2' color='white'>
                        Nov 11, 2021, 06:45PM
                    </Typography>
                </Box>
                <Stack px='2em' pt='1em' pb='2em' spacing={2}>
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
                    <Divider />
                    <Stack width='100%' display='flex' direction='column' justifyContent='center' alignItems='center'>
                        <Typography variant='h6'>Order Details</Typography>

                        {list()}
                    </Stack>




                </Stack>
            </Stack>
        </Stack>

    )
}

export default index