import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './Layout/Clients'
import Home from './views/Home'

function App() {

  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
