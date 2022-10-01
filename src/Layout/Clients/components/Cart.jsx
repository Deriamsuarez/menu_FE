import React, { useState } from 'react'
import { Alert, AlertTitle, Avatar, Box, Button, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { padding, Stack } from '@mui/system';
import OrdersCardInCart from './OrdersCardInCart';


const Cart = ({ state, setState }) => {

    const [addInfo, setAddInfo] = useState('none')
    const [rotate, setRotate] = useState('rotate(180deg)')

    const closeAddCountInfo = () => {
        if (addInfo == '') {
            setAddInfo('none')
            setRotate('rotate(180deg)')
        } else {
            setAddInfo('')
            setRotate('')

        }
    }

    const list = (anchor) => (
        <Stack>
            <Box sx={{ padding: '0 1em', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}>
                <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: '1em', gap: '0.5em' }}><LocalMallOutlinedIcon color='primary' />Cart</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Sushi pollo" secondary="$1,000 × 3 = $3,000" />
                        <DeleteOutlineOutlinedIcon color='error' />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Hamburguesa" secondary="$450 × 2 = $900" />
                        <DeleteOutlineOutlinedIcon color='error' />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Pina Colada" secondary="$700 × 2 = $1,400" />

                        <DeleteOutlineOutlinedIcon color='error' />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocalMallOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Hamburguesa" secondary="$450 × 2 = $900" />
                        <DeleteOutlineOutlinedIcon color='error' />
                    </ListItem>
                </List>
            </Box>
            <Stack px='2em' sx={{ gap: '1em' }}>
                <Divider />
                <Button variant='outlined' color='success'>Solicitar preparacion</Button>
            </Stack>
        </Stack>
    );

    return (
        <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={() => setState({ right: false })}
        >
            <Stack
                sx={{
                    direction: 'column',
                    maxWidth: 300,
                    height: '100%',
                    justifyContent: "space-between"
                }}
            >

                {list('right')}

                <Stack sx={{ mx: '2em', my: '1em', gap: '1em' }}>

                    <OrdersCardInCart setCartState={setState}/>

                    <Divider />
                    <Stack sx={{ gap: '0.1em' }}>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='body2'>SubTotal:</Typography>
                            <Typography variant='subtitle1'>$4,500.00</Typography>
                        </Stack>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='body2'>{'ITBIS (18%)'}</Typography>
                            <Typography variant='subtitle1'>$4,500.00</Typography>
                        </Stack>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='body2'>{'LEY (10%)'}</Typography>
                            <Typography variant='subtitle1'>$4,500.00</Typography>
                        </Stack>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='body1'>Total:</Typography>
                            <Typography variant='h6' color='success.main'>$4,500.00</Typography>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Alert severity="info" sx={{ maxWidth: "100%", textAlign: "justify", transition: '0,3s' }}>
                        <AlertTitle sx={{ width: "170px", display: 'flex', justifyContent: 'space-between' }}>
                            Agregar cuenta
                            <KeyboardArrowDownIcon onClick={closeAddCountInfo} sx={{ cursor: 'pointer', transform: rotate }} />
                        </AlertTitle>
                        <Typography variant='subtitle2' sx={{ display: addInfo }}>
                            Si asumirá la cuenta de alguien más, <strong>haga click en el siguiente boton:</strong>
                        </Typography>
                        <Button variant='outlined'
                            color='info'
                            sx={{ display: addInfo, width: "100%", marginTop: '1em' }}>Agregar Cuenta
                        </Button>
                    </Alert>
                    <Button variant='contained' color='success' sx={{ marginBottom: '2em' }}>Solicitar Cuenta</Button>
                </Stack>
            </Stack>
        </Drawer>
    );
}
export default Cart