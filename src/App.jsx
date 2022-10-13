import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './Layout/Clients'
import Home from './views/Clients/Home'
import Login from './views/Clients/Login'
import Orders from './views/Clients/Orders'
import Dashboard from './views/Admin/Dashboard'
import AdminLayout from './Layout/Admin'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<ClientLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
      </Route>
      <Route element={<AdminLayout/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}

export default App
