import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SideBar from './components/SideBar'

const AdminLayout = () => {

  const [state, setState] = useState({ left: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  return (
    <Stack pr={4} sx={{ display: 'flex', maxHeight: '100vh', overflow: 'scroll'}}>
      <Header toggleDrawer={toggleDrawer} />
      <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
        <Stack >
          <SideBar state={state} setState={setState} toggleDrawer={toggleDrawer} />
        </Stack>
        <Stack pt={10} pl={4} sx={{ flex: 1}}>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AdminLayout