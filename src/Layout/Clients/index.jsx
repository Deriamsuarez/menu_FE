import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Test from '../../views/Clients/Home/components/Test'
import NavigationBottom from './components/NavigationBottom'



const Layout = () => {

  const [counterBag, setCounterBag] = useState(0)
  const [cartState, setCartState] = useState({ right: false });

  const logged = true

  if(logged){
    return (
      <Stack pt={2} pb={4} sx={{maxHeight: '100vh', overflow: 'scroll'}}>
        <Header
          // setCartState={setCartState}
          counterBag={counterBag}
          setCounterBag={setCounterBag}
        />

        <Cart
          state={cartState}
          setState={setCartState}
          />
          <Stack mt={6} >
        <Outlet context={[counterBag, setCounterBag, cartState, setCartState]} />
        </Stack>
        <NavigationBottom
          setCartState={setCartState}
          counterBag={counterBag}
          setCounterBag={setCounterBag}
          />
      </Stack>
    )
  }else{
    return (
      <Navigate to= '/login' />
    )
  }


}


export default Layout