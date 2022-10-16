import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './Layout/Clients'
import Home from './views/Clients/Home'
import Login from './views/Clients/Login'
import Orders from './views/Clients/Orders'
import Dashboard from './views/Admin/Dashboard'
import Admin from './Layout/Admin'
import Products from './views/Admin/Products'
import Profiles from './views/Admin/Profiles'
import Bills from './views/Admin/Bills'
import AdminConfig from './views/Admin/Config'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<ClientLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<Orders />} />
      </Route>
      <Route element={<Admin />}>
        <Route path='admin/dashboard' element={<Dashboard />} />
        <Route path='admin/products' element={<Products />} />
        <Route path='admin/profiles' element={<Profiles />} />
        <Route path='admin/bills' element={<Bills />} />
        <Route path='admin/configuration' element={<AdminConfig />} />
      </Route>
    </Routes>
  )
}

export default App
