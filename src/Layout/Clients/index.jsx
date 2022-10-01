import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'



const Layout = () => {

  const [counterBag, setCounterBag] = useState(0)
  const [cartState, setCartState] = useState({ right: false });


  return (
    <Stack>
      <Header
        setCartState={setCartState}
        counterBag={counterBag}
        setCounterBag={setCounterBag}
      />
      <Cart
        state={cartState}
        setState={setCartState}
      />
      <Outlet context={[counterBag, setCounterBag, cartState, setCartState]} />
    </Stack>
  )
}


export default Layout