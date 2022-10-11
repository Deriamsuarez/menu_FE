import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './Layout/Clients'
import Home from './views/Home'
import Login from './views/Login'
import Orders from './views/Orders'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ClientLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
      </Route>
    </Routes>
  )
}

export default App
