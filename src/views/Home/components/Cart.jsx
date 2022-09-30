import React from 'react'
import { Alert, AlertTitle, Avatar, Box, Button, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { padding, Stack } from '@mui/system';


const Cart = ({ state, setState }) => {

    const list = (anchor) => (
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalMallOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Sushi pollo" secondary="$1,000.00" />
                    <Button color='error'>
                        <DeleteOutlineOutlinedIcon color='error' />
                    </Button>                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalMallOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Pina Colada" secondary="$700.60" />
                    <Button color='error'>
                        <DeleteOutlineOutlinedIcon color='error' />
                    </Button>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalMallOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Hamburguesa" secondary="$450.60" />
                    <Button color='error'>
                        <DeleteOutlineOutlinedIcon color='error' />
                    </Button>
                </ListItem>
            </List>
            <Stack sx={{ mx: '1em', gap: '1em' }}>
                <Divider />
                <Button variant='outlined' color='success'>Solicitar preparacion</Button>

            </Stack>
        </Box>
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

                <Stack sx={{ mx: '2em', my: '3em', gap: '1em' }}>
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
                    <Alert severity="info" sx={{ maxWidth: "100%", textAlign: "justify" }}>
                        <AlertTitle>Agregar otra cuenta</AlertTitle>
                        Si asumirá la cuenta de alguien más, <strong>haga click en el siguiente boton:</strong>
                        <Button variant='outlined'
                            color='info'
                            sx={{ width: "100%", marginTop: '1em' }}>Agregar Cuenta</Button>
                    </Alert>
                    <Button variant='contained' color='success'>Solicitar Cuenta</Button>
                </Stack>
            </Stack>
        </Drawer>
    );
}
export default Cart