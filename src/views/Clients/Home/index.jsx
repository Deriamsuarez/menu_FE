import React, { useState } from 'react'
import { Alert, Snackbar, Stack, Tab, Tabs } from '@mui/material'
import { useOutletContext } from 'react-router-dom';
import cartProducts from '../../../utils/cartProducts';
import Sections from './components/Sections';
import FilterTabs from './components/FilterTabs';
import InfoProduct from './components/InfoProduct';
import SearchProduct from './components/SearchProduct';
import { useDispatch, useSelector } from 'react-redux'



const Home = () => {
    
    const dispatch = useDispatch()

    const products = useSelector(menu => menu.products.foodsMenu)

    const [modalInfo, setModalInfo] = useState(null)
    const [foods, setFoods] = useState(products)
    const [openMessage, setOpenMessage] = useState(false);
    const [counterBag, setCounterBag] = useOutletContext();
    const [stateInfoProduct, setStateInfoProduct] = useState(false);


    const addProduct = (idName, amount) => {
        setCounterBag(counterBag + 1)
        setOpenMessage(true);

        console.log(amount)
        console.log(     idName.amount)
   

        let data = {
            name: idName.name,
            price: idName.price,
            img: 'https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg',
            amount
        }

        const productFound = cartProducts.find(product => product.name == idName.name)

        console.log(productFound)
        if (productFound) {
            idName.amount + amount
            // dispatch(setCart(inputValue))

        } else {
            cartProducts.push(data)
        }

    }

    const handleCloseMessage = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenMessage(false);
    };


    const toggleDrawer = (anchor, open, product) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setStateInfoProduct({ bottom: stateInfoProduct, [anchor]: open });
        setModalInfo(product)
    };

    return (
        <Stack>
            <FilterTabs foods={foods} setFoods={setFoods} />
            <Stack
                sx={{ gap: '2em' }}
                direction='column'
                flexWrap='wrap'
                justifyContent='center'
                alignItems='center'
            >
                <SearchProduct />

                {foods && foods.map(section =>
                    <Sections
                        key={section.title}
                        section={section}
                        setStateInfoProduct={setStateInfoProduct}
                        toggleDrawer={toggleDrawer}
                        setModalInfo={setModalInfo}
                        setCounterBag={setCounterBag}
                        counterBag={counterBag}
                        addProduct={addProduct}
                    />
                )}
                <InfoProduct
                    stateInfoProduct={stateInfoProduct}
                    setStateInfoProduct={setStateInfoProduct}
                    toggleDrawer={toggleDrawer}
                    product={modalInfo}
                    addProduct={addProduct}
                />
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

            </Stack>
        </Stack>
    )
}

export default Home