import React, { useState } from 'react'
import { Alert, Snackbar, Stack, Tab, Tabs } from '@mui/material'
import SectionMenu from './components/SectionMenu';
import ModalInfoProduct from './components/ModalInfoProduct';
import { useOutletContext } from 'react-router-dom';
import Cart from './components/Cart'

const menu = {
    foodsMenu: [
        {
            title: 'Entrada', rows: [
                { name: 'Frozen yoghurt', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Sushi', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Hola mundo', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Ice cream sandwich', price: 23.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' }
            ]
        },

        {
            title: 'Juntes', rows: [
                { name: 'Frozen yoghurt', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Sushi', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Hola mundo', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Ice cream sandwich', price: 23.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' }
            ]
        },

        {
            title: 'Platos', rows: [
                { name: 'Frozen yoghurt', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Ice cream sandwich', price: 23.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' }
            ]
        },

        {
            title: 'Sushinis', rows: [
                { name: 'Frozen yoghurt', price: 1523.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' },
                { name: 'Ice cream sandwich', price: 23.01, description: 'hola mundo cuantos also tenfo en estas cosas, hace mucho ya', img: 'vite.svg' }
            ]
        },
    ]
}

const Home = () => {

    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(null)
    const [foods, setFoods] = useState(menu.foodsMenu)
    const [openMessage, setOpenMessage] = useState(false);
    const [count, setCount, cartState, setCartState] = useOutletContext();

    const addProduct = () => {
        setCount(count + 1)
        setOpenMessage(true);
    }

    const handleClick = () => {
        setOpenMessage(true);
    };

    const handleCloseMessage = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenMessage(false);
    };

    const handleOpen = (info) => {

        setModalInfo(info)
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack>
            <Tabs
                value={0}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="Todo" />
                <Tab label="Entradas" />
                <Tab label="Juntes" />
                <Tab label="Platos" />
                <Tab label="Sushinis" />
                <Tab label="Bebidas" />
                <Tab label="Postres" />
            </Tabs>

            <Stack
                p={4}
                direction='row'
                flexWrap='wrap'
                gap='56.5px'
                justifyContent='center'
                alignContent='flex-end'
                alignItems='flex-start'
            >


                {foods && foods.map(section =>
                    <SectionMenu
                        setCartState={setCartState}
                        addProduct={addProduct}
                        key={section.title}
                        section={section}
                        handleOpen={handleOpen}
                        setOpenMessage={setOpenMessage} />
                )}

                <ModalInfoProduct
                    addProduct={addProduct}
                    handleClose={handleClose}
                    modalInfo={modalInfo}
                    handleClick={handleClick}
                    open={open} />

                <Snackbar
                    open={openMessage}
                    autoHideDuration={3000}
                    onClose={handleCloseMessage}>
                    <Alert
                        onClose={handleCloseMessage}
                        variant="filled"
                        severity="success"
                        sx={{ width: '100%' }}>
                        Producto agregado correctamente
                    </Alert>
                </Snackbar>
                <Cart
                    state={cartState}
                    setState={setCartState} />
            </Stack>
        </Stack>
    )
}

export default Home