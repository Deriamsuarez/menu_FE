import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './template/Header'



const Layout = () => {

  const [counterBag, setCounterBag] = useState(0)
  const [cartState, setCartState] = useState({ right: false });


    return (
      <Stack>
          <Header setCartState={setCartState} counterBag={counterBag} setCounterBag={setCounterBag}/>
          <Outlet context={[counterBag, setCounterBag, cartState, setCartState]}/>
      </Stack>
    )
  }


export default Layout