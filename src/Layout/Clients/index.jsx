import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/Header'
import Test from '../../views/Home/components/Test'
import NavigationBottom from './components/NavigationBottom'



const Layout = () => {

  const [counterBag, setCounterBag] = useState(0)
  const [cartState, setCartState] = useState({ right: false });

  const logged = true

  if(logged){
    return (
      <Stack pb={8}>
        <Header
          // setCartState={setCartState}
          counterBag={counterBag}
          setCounterBag={setCounterBag}
        />
        <Cart
          state={cartState}
          setState={setCartState}
        />
        <Outlet context={[counterBag, setCounterBag, cartState, setCartState]} />
        <NavigationBottom
          setCartState={setCartState}
          counterBag={counterBag}
          setCounterBag={setCounterBag}
        />
        {/* <Test/> */}
      </Stack>
    )
  }else{
    return (
      <Navigate to= '/login' />
    )
  }


}


export default Layout