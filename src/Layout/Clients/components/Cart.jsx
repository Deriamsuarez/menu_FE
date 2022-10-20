import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Stack } from '@mui/system';
import OrdersCardInCart from './OrdersCardInCart';
import cartProducts from '../../../utils/cartProducts';
import AddCart from './AddCart';


const Cart = ({ state, setState }) => {

    const [productsInCart, setProductsInCart] = useState(cartProducts)
    const [ordersCreated, setOrdersCreated] = useState([])


    useEffect(() => {
        setProductsInCart(cartProducts)
    }, [cartProducts]);

    const sendOrderToKitchen = () => {

        if (ordersCreated) {
            ordersCreated.push(
                
            )
        } else {
            setOrdersCreated(
                cartProducts
            )

            setProductsInCart([])
        }

    };

    const list = (anchor) => {

        const deleteProductInCart = (idName) => {
            cartProducts.splice(idName, 1)
        }

        return (
            <Stack >
                <Box sx={{ padding: '0 1em', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}>
                    <Typography variant='h5' sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", marginTop: '1em', gap: '0.5em' }}><LocalMallOutlinedIcon color='primary' />Cart</Typography>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {productsInCart.map(productInCart =>
                            <ListItem key={productInCart.name}>
                                <ListItemAvatar>
                                    <Avatar src={productInCart.img} />
                                </ListItemAvatar>
                                <ListItemText primary={productInCart.name} secondary={`$${productInCart.price} × ${productInCart.amount} = ${(productInCart.price * productInCart.amount).toFixed(2)}`} />
                                <DeleteOutlineOutlinedIcon onClick={() => deleteProductInCart(productInCart)} color='error' sx={{ cursor: 'pointer' }} />
                            </ListItem>
                        )}
                    </List>
                </Box>
                <Stack px='2em' sx={{ gap: '1em' }}>
                    <Divider />
                    <Button onClick={sendOrderToKitchen} variant='outlined' color='success'>Solicitar preparacion</Button>
                </Stack>
            </Stack>
        )
    };

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
                    justifyContent: "space-between",
                }}
            >
                {list('right')}

                <Stack sx={{ mx: '2em', my: '1em', gap: '1em' }}>

                    {ordersCreated && ordersCreated.map(product =>
                        <OrdersCardInCart setCartState={setState} product={product} />
                    )}
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
                    <AddCart />
                    <Button variant='contained' color='success' sx={{ marginBottom: '2em' }}>Solicitar Cuenta</Button>
                </Stack>
            </Stack>
        </Drawer>
    );
}
export default Cart