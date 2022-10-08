import React, { useState } from 'react'
import { Alert, Snackbar, Stack, Tab, Tabs } from '@mui/material'
import SectionMenu from './components/SectionMenu';
import ModalInfoProduct from './components/ModalInfoProduct';
import { useOutletContext } from 'react-router-dom';
import menu from '../../utils/menu';
import cartProducts from '../../utils/cartProducts';
import Sections from './components/Sections';
import FilterTabs from './components/FilterTabs';
import Test from './components/Test'
import InfoProduct from './components/InfoProduct';


const Home = () => {

    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(null)
    const [foods, setFoods] = useState(menu.foodsMenu)
    const [openMessage, setOpenMessage] = useState(false);
    const [count, setCount, cartState, setCartState, setCounterBag, counterBag] = useOutletContext();
    const [stateInfoProduct, setStateInfoProduct] = useState(false);

    const addProduct = (idName) => {
        setCount(count + 1)
        setOpenMessage(true);
        let data = {
            name: idName.name,
            price: idName.price,
            img: 'https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg',
            amount: 1
        }

        const productFound = cartProducts.find(product => product.name == idName.name)

        console.log(productFound)

        if (productFound) {
            idName = productFound.amount++
        } else {
            cartProducts.push(data)
        }


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
            <FilterTabs foods={foods} setFoods={setFoods}/>
            <Stack
                sx={{ gap: '1em' }}
                direction='column'
                flexWrap='wrap'
                justifyContent='center'
                alignItems='flex-start'
            >

                {foods && foods.map(section =>
                    <Sections 
                    key={section.title} 
                    section={section} 
                    setStateInfoProduct={setStateInfoProduct} 
                    toggleDrawer={toggleDrawer} 
                    setModalInfo={setModalInfo} 
                    setCounterBag={setCounterBag}
                    counterBag={counterBag}
                    />
                )}
                {/* {foods && foods.map(section =>
                    <SectionMenu
                        setCartState={setCartState}
                        addProduct={addProduct}
                        key={section.title}
                        section={section}
                        handleOpen={handleOpen}
                        setOpenMessage={setOpenMessage} />
                )} */}

                <ModalInfoProduct
                    addProduct={addProduct}
                    handleClose={handleClose}
                    modalInfo={modalInfo}
                    handleClick={handleClick}
                    open={open} />
                {/* <Test/> */}
            {modalInfo &&  <InfoProduct
                    stateInfoProduct={stateInfoProduct}
                    setStateInfoProduct={setStateInfoProduct}
                    toggleDrawer={toggleDrawer}
                    product={modalInfo}
                /> }   
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